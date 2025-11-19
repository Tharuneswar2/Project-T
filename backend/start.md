curl -X POST "http://127.0.0.1:8000/trade/start" \
 -H "Content-Type: application/json" \
 -d '{
   "signal_id": "SIG-001",
   "side": "BUY",
   "symbol": {"index":"NIFTY","strike":25900,"type":"CE","expiry":"2025-11-14"},
   "order": {"entry_type":"ABOVE","entry_price":140,"stoploss":128,"target":176,"quantity":1}
 }'
