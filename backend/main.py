# main.py
import os
import asyncio
import time
import logging
from typing import Dict, Any, Optional, Set
from datetime import datetime, timedelta

import requests
import pyotp
from fastapi import FastAPI, BackgroundTasks, HTTPException, WebSocket, WebSocketDisconnect
from pydantic import BaseModel, Field

# SmartAPI import (adjust if your package name differs)
from SmartApi import SmartConnect

# ========== CONFIG ==========
TOTP_SECRET = os.getenv("TOTP_SECRET", "5HX764QKYGUEJMV4I5Y7T4QDF4")
API_KEY     = os.getenv("API_KEY", "DIxAJOqN")
CLIENT_ID   = os.getenv("CLIENT_ID", "T209815")
PASSWORD    = os.getenv("PASSWORD", "4753")

SCRIP_MASTER_URL = os.getenv(
    "SCRIP_MASTER_URL",
    "https://margincalculator.angelbroking.com/OpenAPI_File/files/OpenAPIScripMaster.json"
)

POLL_INTERVAL_SEC = float(os.getenv("POLL_INTERVAL_SEC", "1.0"))
SESSION_TTL_MIN = int(os.getenv("SESSION_TTL_MIN", "120"))
BROADCAST_INTERVAL_SEC = float(os.getenv("BROADCAST_INTERVAL_SEC", "1.0"))

# ========== LOGGING ==========
logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
logger = logging.getLogger("auto-trader")

# ========== FASTAPI ==========
app = FastAPI(title="SmartAPI Auto-Trader with WebSocket", version="1.1")

# ========== IN-MEMORY STATE ==========
session_cache: Dict[str, Any] = {"client": None, "created_at": None}
active_signals: Dict[str, Dict[str, Any]] = {}  # signal_id -> metadata and runtime values

# WebSocket connections (broadcast to all subscribers)
connected_websockets: Set[WebSocket] = set()
broadcast_lock = asyncio.Lock()

# ========== MODELS ==========
class SymbolModel(BaseModel):
    index: str
    strike: Optional[int] = None
    type: str = Field(..., pattern="^(CE|PE|FUT)$")  # CE, PE, or FUT
    expiry: Optional[str] = None  # 'YYYY-MM-DD' optional


class OrderModel(BaseModel):
    entry_type: str = Field(..., pattern="^(ABOVE|BELOW|AT)$")
    entry_price: float
    stoploss: float
    target: float
    quantity: int  # number of contracts (will be multiplied by lotsize)


class SignalModel(BaseModel):
    signal_id: str
    side: str = Field(..., pattern="^(BUY|SELL)$")
    symbol: SymbolModel
    order: OrderModel


class UpdateOrderModel(BaseModel):
    stoploss: Optional[float] = None
    target: Optional[float] = None


# ========== SMARTAPI SESSION MANAGEMENT ==========
def login() -> SmartConnect:
    now = datetime.utcnow()
    client = session_cache.get("client")
    created = session_cache.get("created_at")

    if client and created and (now - created) < timedelta(minutes=SESSION_TTL_MIN):
        return client

    logger.info("Logging in to SmartAPI...")
    totp = pyotp.TOTP(TOTP_SECRET).now()
    client = SmartConnect(api_key=API_KEY)
    data = client.generateSession(CLIENT_ID, PASSWORD, totp)
    if not data or data.get("status") is False:
        raise RuntimeError(f"SmartAPI login failed: {data}")
    session_cache["client"] = client
    session_cache["created_at"] = datetime.utcnow()
    logger.info("SmartAPI login successful.")
    return client


# ========== SCRIP MASTER HELPERS ==========
def fetch_scrip_master() -> list:
    resp = requests.get(SCRIP_MASTER_URL, timeout=10)
    resp.raise_for_status()
    return resp.json()


def find_token_from_schema(symbol: SymbolModel, scrip_master: list) -> Dict[str, Any]:
    index = symbol.index.upper()
    strike = symbol.strike
    opt_type = symbol.type.upper()
    expiry = symbol.expiry

    candidates = []
    for s in scrip_master:
        try:
            name = str(s.get("symbol", "")).upper()
            instr_type = str(s.get("instrumenttype", "")).upper()
            token = s.get("token")
            lotsize = s.get("lotsize") or s.get("lot_size") or s.get("lot") or 1
        except Exception:
            continue

        if opt_type == "FUT":
            if index in name and "FUT" in instr_type:
                candidates.append((s, 10))
        else:
            if strike and str(strike) in name and (("CE" in name) or ("PE" in name) or (opt_type in name)):
                score = 5
                if expiry:
                    s_exp = s.get("expiry") or s.get("expirydate") or s.get("expiryDate")
                    if s_exp:
                        s_exp_norm = str(s_exp)[:10]
                        if s_exp_norm == expiry:
                            score += 10
                candidates.append((s, score))

    if not candidates:
        for s in scrip_master:
            name = str(s.get("symbol", "")).upper()
            if strike and f"{index}{strike}{opt_type}" in name:
                candidates.append((s, 1))

    if not candidates:
        raise ValueError(f"Could not find token for symbol: {symbol}")

    candidates.sort(key=lambda x: x[1], reverse=True)
    best = candidates[0][0]
    return {"token": best.get("token"), "lotsize": int(best.get("lotsize") or 1), "symbol": best.get("symbol")}


# ========== SMARTAPI HELPERS ==========
def get_ltp(smart_obj: SmartConnect, exchange: str, tradingsymbol: str, token: str) -> float:
    try:
        res = smart_obj.ltpData(exchange, tradingsymbol, token)
        return float(res["data"]["ltp"])
    except Exception as e:
        logger.exception("ltp fetch failed: %s", e)
        raise


def place_market_order(smart_obj: SmartConnect, tradingsymbol: str, token: str, side: str, exchange="NFO", quantity=1, producttype="INTRADAY"):
    order = {
        "variety": "NORMAL",
        "tradingsymbol": tradingsymbol,
        "symboltoken": str(token),
        "transactiontype": side,
        "exchange": exchange,
        "ordertype": "MARKET",
        "producttype": producttype,
        "duration": "DAY",
        "quantity": str(quantity)
    }
    logger.info("Placing %s order: %s qty=%s token=%s", side, tradingsymbol, quantity, token)
    resp = smart_obj.placeOrder(order)
    return resp


def try_get_fill_price(smart_obj: SmartConnect, token: str, side: str) -> Optional[float]:
    """
    Try to find the fill price in tradeBook for the given token and side.
    Best-effort: returns last matched trade price or None.
    """
    try:
        trades = smart_obj.tradeBook()
        data = trades.get("data", [])
        # search reverse for latest matching token and side
        for t in reversed(data):
            try:
                if str(t.get("token")) == str(token) and t.get("side", "").upper() == side.upper():
                    return float(t.get("price") or t.get("tradeprice") or t.get("ltp") or 0)
            except Exception:
                continue
    except Exception:
        logger.debug("tradeBook fetch failed or empty")
    return None


def try_modify_order(smart_obj: SmartConnect, orderid: str, new_price: Optional[float] = None, new_qty: Optional[int] = None):
    """
    Attempt to modify an existing order if orderid is available.
    SmartAPI modifyOrder signature may differ; adapt as needed.
    This is best-effort and may fail depending on broker/order state.
    """
    try:
        params = {"orderid": orderid}
        if new_price is not None:
            params["price"] = str(new_price)
        if new_qty is not None:
            params["quantity"] = str(new_qty)
        resp = smart_obj.modifyOrder(params)
        return resp
    except Exception as e:
        logger.warning("modifyOrder failed for %s: %s", orderid, e)
        return None


# ========== BROADCAST HELPERS ==========
async def broadcast_active_signals():
    """
    Periodically broadcast the active_signals snapshot to all connected websockets.
    Each message is JSON serializable dict of active_signals.
    """
    while True:
        await asyncio.sleep(BROADCAST_INTERVAL_SEC)
        if not connected_websockets:
            continue
        snapshot = {}
        # prepare lightweight view
        for sid, meta in active_signals.items():
            snapshot[sid] = {
                "status": meta.get("status"),
                "ltp": meta.get("ltp"),
                "entry_price": meta.get("entry_price"),
                "side": meta.get("side"),
                "total_qty": meta.get("total_qty"),
                "pnl": meta.get("pnl"),
                "distance_to_tgt": meta.get("distance_to_tgt"),
                "distance_to_sl": meta.get("distance_to_sl"),
                "started_at": meta.get("started_at"),
            }
        msg = {"type": "active_signals", "time": datetime.utcnow().isoformat(), "data": snapshot}
        await _safe_broadcast(msg)


async def _safe_broadcast(message: Dict[str, Any]):
    remove = []
    text = None
    try:
        import json
        text = json.dumps(message, default=str)
    except Exception:
        text = str(message)

    async with broadcast_lock:
        for ws in set(connected_websockets):
            try:
                await ws.send_text(text)
            except Exception:
                remove.append(ws)
        for ws in remove:
            try:
                connected_websockets.remove(ws)
            except Exception:
                pass


# ========== SIGNAL PROCESSING FLOW ==========
async def monitor_and_execute(signal: SignalModel):
    sid = signal.signal_id
    if sid in active_signals:
        logger.warning("Signal %s already active", sid)
        return
    active_signals[sid] = {"status": "processing", "started_at": datetime.utcnow().isoformat(), "signal": signal.dict()}
    try:
        smart = login()

        # resolve token
        scrips = fetch_scrip_master()
        token_info = find_token_from_schema(signal.symbol, scrips)
        token = token_info["token"]
        lotsize = token_info["lotsize"]
        resolved_symbol_text = token_info.get("symbol") or f"{signal.symbol.index}{signal.symbol.strike}{signal.symbol.type}"

        user_qty_contracts = signal.order.quantity
        total_qty = user_qty_contracts * max(1, lotsize)
        exchange = "NFO" if signal.symbol.type in ("CE", "PE", "FUT") else "NSE"

        # runtime fields
        active_signals[sid].update({
            "token": token,
            "lotsize": lotsize,
            "resolved_symbol": resolved_symbol_text,
            "total_qty": total_qty,
            "exchange": exchange,
            "side": signal.side.upper(),
            "entry_price": None,
            "entry_order": None,
            "exit_order": None,
            "ltp": None,
            "pnl": None,
            "distance_to_tgt": None,
            "distance_to_sl": None,
        })

        entry_type = signal.order.entry_type.upper()
        entry_price = float(signal.order.entry_price)
        sl_price = float(signal.order.stoploss)
        tgt_price = float(signal.order.target)
        side = signal.side.upper()

        # store dynamic, so update endpoint can change them
        active_signals[sid]["dynamic"] = {"stoploss": sl_price, "target": tgt_price, "entry_price": entry_price}

        # WAIT FOR ENTRY
        active_signals[sid]["status"] = "waiting_for_entry"
        logger.info("Signal %s: waiting for entry (type=%s price=%s)", sid, entry_type, entry_price)

        while True:
            try:
                ltp = get_ltp(smart, exchange, resolved_symbol_text, token)
            except Exception:
                logger.warning("LTP fetch error for %s. Attempting re-login.", sid)
                smart = login()
                await asyncio.sleep(POLL_INTERVAL_SEC)
                continue

            active_signals[sid]["ltp"] = ltp

            if entry_type == "ABOVE":
                triggered = ltp >= entry_price
            elif entry_type == "BELOW":
                triggered = ltp <= entry_price
            else:
                triggered = abs(ltp - entry_price) <= 0.01

            if triggered:
                logger.info("Signal %s: entry triggered at ltp=%s", sid, ltp)
                break
            await asyncio.sleep(POLL_INTERVAL_SEC)

        # PLACE ENTRY ORDER (market)
        active_signals[sid]["status"] = "placing_entry"
        order_resp = place_market_order(smart, resolved_symbol_text, token, side, exchange, total_qty)
        active_signals[sid]["entry_order"] = order_resp
        # try to read fill price from tradeBook
        fill_price = try_get_fill_price(smart, token, side) or None
        if fill_price:
            active_signals[sid]["entry_price"] = fill_price
        else:
            # fallback to last LTP
            active_signals[sid]["entry_price"] = active_signals[sid].get("ltp")

        # allow modifying SL/target at runtime via active_signals[sid]['dynamic']
        active_signals[sid]["status"] = "monitoring"
        logger.info("Signal %s: monitoring (entry_price=%s) target=%s sl=%s", sid, active_signals[sid]["entry_price"], active_signals[sid]["dynamic"]["target"], active_signals[sid]["dynamic"]["stoploss"])

        while True:
            try:
                ltp = get_ltp(smart, exchange, resolved_symbol_text, token)
            except Exception:
                logger.warning("LTP fetch error while monitoring. Re-login and continue.")
                smart = login()
                await asyncio.sleep(POLL_INTERVAL_SEC)
                continue

            active_signals[sid]["ltp"] = ltp

            # compute PnL: (ltp - entry) * qty * direction
            entry_p = active_signals[sid].get("entry_price") or 0.0
            qty = active_signals[sid]["total_qty"]
            if entry_p is not None:
                if side == "BUY":
                    pnl = (ltp - entry_p) * qty
                    distance_to_tgt = (active_signals[sid]["dynamic"]["target"] - ltp)
                    distance_to_sl = (ltp - active_signals[sid]["dynamic"]["stoploss"])
                else:
                    pnl = (entry_p - ltp) * qty
                    distance_to_tgt = (ltp - active_signals[sid]["dynamic"]["target"])
                    distance_to_sl = (active_signals[sid]["dynamic"]["stoploss"] - ltp)
                active_signals[sid]["pnl"] = pnl
                active_signals[sid]["distance_to_tgt"] = distance_to_tgt
                active_signals[sid]["distance_to_sl"] = distance_to_sl

            # check dynamic SL/target
            tgt_price_now = float(active_signals[sid]["dynamic"]["target"])
            sl_price_now = float(active_signals[sid]["dynamic"]["stoploss"])

            if side == "BUY":
                if ltp >= tgt_price_now:
                    logger.info("Signal %s: target hit at %s. Exiting.", sid, ltp)
                    resp = place_market_order(smart, resolved_symbol_text, token, "SELL", exchange, qty)
                    active_signals[sid]["exit_order"] = resp
                    active_signals[sid]["status"] = "target_hit"
                    break
                if ltp <= sl_price_now:
                    logger.info("Signal %s: stoploss hit at %s. Exiting.", sid, ltp)
                    resp = place_market_order(smart, resolved_symbol_text, token, "SELL", exchange, qty)
                    active_signals[sid]["exit_order"] = resp
                    active_signals[sid]["status"] = "stoploss_hit"
                    break
            else:  # SELL
                if ltp <= tgt_price_now:
                    logger.info("Signal %s: target hit for SELL at %s. Exiting BUY to cover.", sid, ltp)
                    resp = place_market_order(smart, resolved_symbol_text, token, "BUY", exchange, qty)
                    active_signals[sid]["exit_order"] = resp
                    active_signals[sid]["status"] = "target_hit"
                    break
                if ltp >= sl_price_now:
                    logger.info("Signal %s: stoploss hit for SELL at %s. Exiting BUY to cover.", sid, ltp)
                    resp = place_market_order(smart, resolved_symbol_text, token, "BUY", exchange, qty)
                    active_signals[sid]["exit_order"] = resp
                    active_signals[sid]["status"] = "stoploss_hit"
                    break

            await asyncio.sleep(POLL_INTERVAL_SEC)

        logger.info("Signal %s completed with status %s", sid, active_signals[sid]["status"])

    except Exception as e:
        logger.exception("Error processing signal %s: %s", sid, e)
        active_signals[sid]["status"] = "error"
        active_signals[sid]["error"] = str(e)
    finally:
        active_signals[sid]["finished_at"] = datetime.utcnow().isoformat()
        # schedule cleanup
        asyncio.create_task(_cleanup_signal_after(sid, 3600))


async def _cleanup_signal_after(signal_id: str, seconds: int):
    await asyncio.sleep(seconds)
    active_signals.pop(signal_id, None)


# ========== API ENDPOINTS ==========
@app.post("/trade/start")
async def start_trade(signal: SignalModel):
    sid = signal.signal_id
    if sid in active_signals:
        raise HTTPException(status_code=400, detail=f"Signal {sid} already being processed")
    logger.info("Received signal %s - scheduling background task", sid)
    asyncio.create_task(monitor_and_execute(signal))
    return {"status": "accepted", "signal_id": sid}


@app.post("/trade/update/{signal_id}")
async def update_trade(signal_id: str, update: UpdateOrderModel):
    """
    Update the dynamic stoploss and/or target for a running signal.
    This updates the in-memory monitoring values immediately.
    If there are pre-placed SL/target orders with order IDs stored in active_signals[signal_id],
    this endpoint will attempt to modify them via SmartAPI.modifyOrder (best-effort).
    """
    if signal_id not in active_signals:
        raise HTTPException(status_code=404, detail="signal not found or already finished")

    meta = active_signals[signal_id]
    dyn = meta.setdefault("dynamic", {})
    changed = {}

    if update.stoploss is not None:
        old = dyn.get("stoploss")
        dyn["stoploss"] = float(update.stoploss)
        changed["stoploss"] = {"old": old, "new": dyn["stoploss"]}

        # attempt to modify existing SL order if we have an order id
        sl_order_id = meta.get("sl_order_id")
        if sl_order_id:
            try:
                smart = login()
                try_modify_order(smart, sl_order_id, new_price=dyn["stoploss"])
            except Exception:
                logger.warning("Could not modify broker SL order for %s", signal_id)

    if update.target is not None:
        old = dyn.get("target")
        dyn["target"] = float(update.target)
        changed["target"] = {"old": old, "new": dyn["target"]}

        # attempt to modify existing target order if we have an order id
        tgt_order_id = meta.get("tgt_order_id")
        if tgt_order_id:
            try:
                smart = login()
                try_modify_order(smart, tgt_order_id, new_price=dyn["target"])
            except Exception:
                logger.warning("Could not modify broker target order for %s", signal_id)

    logger.info("Signal %s dynamic update: %s", signal_id, changed)
    return {"status": "updated", "changes": changed}


@app.get("/trade/status/{signal_id}")
def trade_status(signal_id: str):
    meta = active_signals.get(signal_id)
    if not meta:
        raise HTTPException(status_code=404, detail="signal not found")
    return meta


@app.get("/health")
def health_check():
    return {"status": "ok", "timestamp": datetime.utcnow().isoformat()}


@app.get("/")
def root():
    return {"message": "SmartAPI Auto-Trader (WS) running."}


# ========== WebSocket endpoint ==========
@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    """
    Connect a frontend to get realtime updates.
    The server broadcasts a snapshot of all active_signals every BROADCAST_INTERVAL_SEC.
    Clients receive JSON messages: {"type":"active_signals","time":..,"data":{...}}
    """
    await ws.accept()
    connected_websockets.add(ws)
    logger.info("WebSocket client connected. total=%d", len(connected_websockets))
    try:
        # keep the connection open; optionally handle client messages
        while True:
            # If you want the client to send pings/messages, handle them here.
            msg = await ws.receive_text()
            # simple ping echo or request for single signal
            if msg.strip().lower().startswith("get "):
                sig = msg.strip().split(" ", 1)[1]
                meta = active_signals.get(sig, {})
                await ws.send_text(str({"type": "single_signal", "signal_id": sig, "data": meta}))
            else:
                await ws.send_text(str({"type": "echo", "message": msg}))
    except WebSocketDisconnect:
        connected_websockets.discard(ws)
        logger.info("WebSocket client disconnected. total=%d", len(connected_websockets))
    except Exception as e:
        connected_websockets.discard(ws)
        logger.exception("WebSocket exception: %s", e)


# ========== START BROADCASTER TASK ==========
@app.on_event("startup")
async def startup_event():
    # spawn broadcaster
    asyncio.create_task(broadcast_active_signals())
    logger.info("Broadcast task started.")

