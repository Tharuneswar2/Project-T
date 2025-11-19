(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/Personal_Designs/trading-signal-dashboard/src/components/theme-toggle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeToggle": (()=>ThemeToggle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ThemeToggle() {
    _s();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            // Check initial theme
            const isDarkMode = document.documentElement.classList.contains('dark');
            setIsDark(isDarkMode);
        }
    }["ThemeToggle.useEffect"], []);
    const toggleTheme = ()=>{
        const html = document.documentElement;
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            setIsDark(false);
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            setIsDark(true);
            localStorage.setItem('theme', 'dark');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        "data-orchids-id": "src/components/theme-toggle.tsx:29:4@toggleTheme",
        "data-orchids-name": "button",
        onClick: toggleTheme,
        className: "p-2 rounded-lg hover:bg-accent transition-colors",
        "aria-label": "Toggle theme",
        children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            "data-orchids-id": "src/components/theme-toggle.tsx:35:8",
            "data-orchids-name": "Sun",
            className: "w-5 h-5 text-foreground"
        }, void 0, false, {
            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/theme-toggle.tsx",
            lineNumber: 35,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            "data-orchids-id": "src/components/theme-toggle.tsx:37:8",
            "data-orchids-name": "Moon",
            className: "w-5 h-5 text-foreground"
        }, void 0, false, {
            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/theme-toggle.tsx",
            lineNumber: 37,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/theme-toggle.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "q9ovQTvwIdpxeVii6kJLTuTYpwE=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn),
    "formatCurrency": (()=>formatCurrency),
    "formatTimestamp": (()=>formatTimestamp),
    "generateSignalId": (()=>generateSignalId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function generateSignalId() {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 7);
    return `SIG-${timestamp}-${random}`.toUpperCase();
}
function formatTimestamp(timestamp) {
    return new Date(timestamp * 1000).toLocaleString();
}
function formatCurrency(value) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 2
    }).format(value);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Navbar": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            href: '/dashboard',
            label: 'Dashboard',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
        },
        {
            href: '/signals/create',
            label: 'Create Signal',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "data-orchids-id": "src/components/navbar.tsx:20:4",
        "data-orchids-name": "nav",
        className: "sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-white/20 dark:border-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src/components/navbar.tsx:21:6",
            "data-orchids-name": "div",
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/navbar.tsx:22:8",
                    "data-orchids-name": "div",
                    className: "flex justify-between items-center h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            "data-orchids-id": "src/components/navbar.tsx:24:10",
                            "data-orchids-name": "Link",
                            href: "/dashboard",
                            className: "flex items-center space-x-2 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/components/navbar.tsx:25:12",
                                    "data-orchids-name": "div",
                                    className: "w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                        "data-orchids-id": "src/components/navbar.tsx:26:14",
                                        "data-orchids-name": "BarChart3",
                                        className: "w-5 h-5 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "data-orchids-id": "src/components/navbar.tsx:28:12",
                                    "data-orchids-name": "span",
                                    className: "text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
                                    children: "AutoTrade"
                                }, void 0, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/navbar.tsx:34:10",
                            "data-orchids-name": "div",
                            className: "hidden md:flex items-center space-x-1",
                            children: navItems.map((item)=>{
                                const Icon = item.icon;
                                const isActive = pathname === item.href;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    "data-orchids-id": "src/components/navbar.tsx:39:16@navItems",
                                    "data-orchids-name": "Link",
                                    href: item.href,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center space-x-2 px-4 py-2 rounded-lg transition-all', isActive ? 'bg-primary text-primary-foreground shadow-lg' : 'hover:bg-accent text-foreground'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            "data-orchids-id": "src/components/navbar.tsx:49:18@navItems",
                                            "data-orchids-name": "Icon",
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                                            lineNumber: 49,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "data-orchids-id": "src/components/navbar.tsx:50:18@navItems",
                                            "data-orchids-name": "span",
                                            className: "font-medium",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                                            lineNumber: 50,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.href, true, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                                    lineNumber: 39,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/navbar.tsx:57:10",
                            "data-orchids-name": "div",
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {
                                    "data-orchids-id": "src/components/navbar.tsx:58:12",
                                    "data-orchids-name": "ThemeToggle"
                                }, void 0, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-orchids-id": "src/components/navbar.tsx:59:12",
                                    "data-orchids-name": "button",
                                    onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                    className: "md:hidden p-2 rounded-lg hover:bg-accent",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        "data-orchids-id": "src/components/navbar.tsx:63:14",
                                        "data-orchids-name": "Menu",
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/navbar.tsx:70:10",
                    "data-orchids-name": "div",
                    className: "md:hidden py-4 space-y-2",
                    children: navItems.map((item)=>{
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            "data-orchids-id": "src/components/navbar.tsx:75:16@navItems",
                            "data-orchids-name": "Link",
                            href: item.href,
                            onClick: ()=>setMobileMenuOpen(false),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center space-x-2 px-4 py-3 rounded-lg transition-all', isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-accent text-foreground'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    "data-orchids-id": "src/components/navbar.tsx:86:18@navItems",
                                    "data-orchids-name": "Icon",
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                                    lineNumber: 86,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "data-orchids-id": "src/components/navbar.tsx:87:18@navItems",
                                    "data-orchids-name": "span",
                                    className: "font-medium",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                                    lineNumber: 87,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, item.href, true, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                            lineNumber: 75,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(Navbar, "FIkGCiZnrKK5dgKLT9oC7ZzKVWM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/components/layout-wrapper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LayoutWrapper": (()=>LayoutWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LayoutWrapper({ children }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutWrapper.useEffect": ()=>{
            // Initialize theme from localStorage
            const theme = localStorage.getItem('theme');
            if (theme === 'dark' || !theme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add('dark');
            }
        }
    }["LayoutWrapper.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {
                "data-orchids-id": "src/components/layout-wrapper.tsx:18:6",
                "data-orchids-name": "Navbar"
            }, void 0, false, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/layout-wrapper.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                "data-orchids-id": "src/components/layout-wrapper.tsx:19:6",
                "data-orchids-name": "main",
                className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-black dark:to-purple-950",
                children: children
            }, void 0, false, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/layout-wrapper.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
                "data-orchids-id": "src/components/layout-wrapper.tsx:22:6",
                "data-orchids-name": "Toaster",
                position: "top-right",
                richColors: true
            }, void 0, false, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/layout-wrapper.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(LayoutWrapper, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = LayoutWrapper;
var _c;
__turbopack_context__.k.register(_c, "LayoutWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/glass-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GlassCard": (()=>GlassCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function GlassCard({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/glass-card.tsx:10:4",
        "data-orchids-name": "div",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('backdrop-blur-xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10', 'rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300', 'hover:border-white/30 dark:hover:border-white/20', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/glass-card.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = GlassCard;
var _c;
__turbopack_context__.k.register(_c, "GlassCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        "data-orchids-id": "src/components/ui/input.tsx:7:4",
        "data-orchids-name": "input",
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/label.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-orchids-id": "src/components/ui/label.tsx:13:4",
        "data-orchids-name": "LabelPrimitive.Root",
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-orchids-id": "src/components/ui/button.tsx:51:4",
        "data-orchids-name": "Comp",
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Select": (()=>Select),
    "SelectContent": (()=>SelectContent),
    "SelectGroup": (()=>SelectGroup),
    "SelectItem": (()=>SelectItem),
    "SelectLabel": (()=>SelectLabel),
    "SelectScrollDownButton": (()=>SelectScrollDownButton),
    "SelectScrollUpButton": (()=>SelectScrollUpButton),
    "SelectSeparator": (()=>SelectSeparator),
    "SelectTrigger": (()=>SelectTrigger),
    "SelectValue": (()=>SelectValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-orchids-id": "src/components/ui/select.tsx:12:9",
        "data-orchids-name": "SelectPrimitive.Root",
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Select;
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-orchids-id": "src/components/ui/select.tsx:18:9",
        "data-orchids-name": "SelectPrimitive.Group",
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = SelectGroup;
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
        "data-orchids-id": "src/components/ui/select.tsx:24:9",
        "data-orchids-name": "SelectPrimitive.Value",
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = SelectValue;
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-orchids-id": "src/components/ui/select.tsx:36:4",
        "data-orchids-name": "SelectPrimitive.Trigger",
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                "data-orchids-id": "src/components/ui/select.tsx:46:6",
                "data-orchids-name": "SelectPrimitive.Icon",
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    "data-orchids-id": "src/components/ui/select.tsx:47:8",
                    "data-orchids-name": "ChevronDownIcon",
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c3 = SelectTrigger;
function SelectContent({ className, children, position = "popper", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-orchids-id": "src/components/ui/select.tsx:60:4",
        "data-orchids-name": "SelectPrimitive.Portal",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-orchids-id": "src/components/ui/select.tsx:61:6",
            "data-orchids-name": "SelectPrimitive.Content",
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {
                    "data-orchids-id": "src/components/ui/select.tsx:72:8",
                    "data-orchids-name": "SelectScrollUpButton"
                }, void 0, false, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    "data-orchids-id": "src/components/ui/select.tsx:73:8",
                    "data-orchids-name": "SelectPrimitive.Viewport",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {
                    "data-orchids-id": "src/components/ui/select.tsx:82:8",
                    "data-orchids-name": "SelectScrollDownButton"
                }, void 0, false, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c4 = SelectContent;
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-orchids-id": "src/components/ui/select.tsx:93:4",
        "data-orchids-name": "SelectPrimitive.Label",
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c5 = SelectLabel;
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-orchids-id": "src/components/ui/select.tsx:107:4",
        "data-orchids-name": "SelectPrimitive.Item",
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "data-orchids-id": "src/components/ui/select.tsx:115:6",
                "data-orchids-name": "span",
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    "data-orchids-id": "src/components/ui/select.tsx:116:8",
                    "data-orchids-name": "SelectPrimitive.ItemIndicator",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        "data-orchids-id": "src/components/ui/select.tsx:117:10",
                        "data-orchids-name": "CheckIcon",
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                "data-orchids-id": "src/components/ui/select.tsx:120:6",
                "data-orchids-name": "SelectPrimitive.ItemText",
                children: children
            }, void 0, false, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c6 = SelectItem;
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-orchids-id": "src/components/ui/select.tsx:130:4",
        "data-orchids-name": "SelectPrimitive.Separator",
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-orchids-id": "src/components/ui/select.tsx:143:4",
        "data-orchids-name": "SelectPrimitive.ScrollUpButton",
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            "data-orchids-id": "src/components/ui/select.tsx:151:6",
            "data-orchids-name": "ChevronUpIcon",
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-orchids-id": "src/components/ui/select.tsx:161:4",
        "data-orchids-name": "SelectPrimitive.ScrollDownButton",
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            "data-orchids-id": "src/components/ui/select.tsx:169:6",
            "data-orchids-name": "ChevronDownIcon",
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/lib/api-client.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "tradeApi": (()=>tradeApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
// Create axios instance with base URL
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json'
    }
});
const tradeApi = {
    // Start a new trade
    startTrade: async (signal)=>{
        const response = await apiClient.post('/trade/start', signal);
        return response.data;
    },
    // Get trade status by signal ID
    getStatus: async (signal_id)=>{
        const response = await apiClient.get(`/trade/status/${signal_id}`);
        return response.data;
    },
    // Update trade stoploss and target
    updateTrade: async (signal_id, updates)=>{
        const response = await apiClient.post(`/trade/update/${signal_id}`, updates);
        return response.data;
    }
};
const __TURBOPACK__default__export__ = apiClient;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/lib/store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAutoRefresh": (()=>useAutoRefresh),
    "useSignalStore": (()=>useSignalStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/api-client.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useSignalStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        signals: new Map(),
        loading: false,
        error: null,
        addSignal: (signal_id)=>{
            const signals = new Map(get().signals);
            if (!signals.has(signal_id)) {
                signals.set(signal_id, {
                    signal_id,
                    status: 'monitoring',
                    started_at: Date.now() / 1000,
                    last_updated: Date.now()
                });
                set({
                    signals
                });
                // Immediately fetch status
                get().refreshSignal(signal_id);
            }
        },
        removeSignal: (signal_id)=>{
            const signals = new Map(get().signals);
            signals.delete(signal_id);
            set({
                signals
            });
        },
        refreshSignal: async (signal_id)=>{
            try {
                const status = await __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tradeApi"].getStatus(signal_id);
                const signals = new Map(get().signals);
                signals.set(signal_id, {
                    signal_id,
                    ...status,
                    last_updated: Date.now()
                });
                set({
                    signals,
                    error: null
                });
            } catch (error) {
                console.error(`Failed to refresh signal ${signal_id}:`, error);
                set({
                    error: `Failed to refresh signal ${signal_id}`
                });
            }
        },
        refreshAllSignals: async ()=>{
            const signalIds = Array.from(get().signals.keys());
            set({
                loading: true
            });
            await Promise.all(signalIds.map((id)=>get().refreshSignal(id)));
            set({
                loading: false
            });
        },
        clearError: ()=>set({
                error: null
            })
    }));
const useAutoRefresh = (intervalMs = 3000)=>{
    _s();
    const refreshAllSignals = useSignalStore({
        "useAutoRefresh.useSignalStore[refreshAllSignals]": (state)=>state.refreshAllSignals
    }["useAutoRefresh.useSignalStore[refreshAllSignals]"]);
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const React = __turbopack_context__.r("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        React.useEffect({
            "useAutoRefresh.useEffect": ()=>{
                const interval = setInterval({
                    "useAutoRefresh.useEffect.interval": ()=>{
                        refreshAllSignals();
                    }
                }["useAutoRefresh.useEffect.interval"], intervalMs);
                return ({
                    "useAutoRefresh.useEffect": ()=>clearInterval(interval)
                })["useAutoRefresh.useEffect"];
            }
        }["useAutoRefresh.useEffect"], [
            refreshAllSignals,
            intervalMs
        ]);
    }
};
_s(useAutoRefresh, "Owp27GePsF24+KVArHkdNRgmgjc=", false, function() {
    return [
        useSignalStore
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateSignalPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$layout$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/layout-wrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/glass-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/api-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function CreateSignalPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const addSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignalStore"])({
        "CreateSignalPage.useSignalStore[addSignal]": (state)=>state.addSignal
    }["CreateSignalPage.useSignalStore[addSignal]"]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPreview, setShowPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { register, handleSubmit, watch, setValue, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            signal_id: '',
            side: 'BUY',
            index: 'NIFTY',
            type: 'CE',
            entry_type: 'ABOVE'
        }
    });
    const formData = watch();
    // Build signal object for preview
    const buildSignal = (data)=>({
            signal_id: data.signal_id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSignalId"])(),
            side: data.side,
            symbol: {
                index: data.index,
                strike: Number(data.strike),
                type: data.type,
                expiry: data.expiry
            },
            order: {
                entry_type: data.entry_type,
                entry_price: Number(data.entry_price),
                stoploss: Number(data.stoploss),
                target: Number(data.target),
                quantity: Number(data.quantity)
            }
        });
    const onSubmit = async (data)=>{
        setLoading(true);
        try {
            const signal = buildSignal(data);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tradeApi"].startTrade(signal);
            __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Signal created successfully!', {
                description: `Signal ID: ${response.signal_id}`
            });
            // Add to store for monitoring
            addSignal(response.signal_id);
            // Redirect to signal details
            router.push(`/signals/${response.signal_id}`);
        } catch (error) {
            console.error('Failed to create signal:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to create signal', {
                description: error.response?.data?.detail || error.message || 'Unknown error occurred'
            });
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$layout$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutWrapper"], {
        "data-orchids-id": "src/app/signals/create/page.tsx:95:4",
        "data-orchids-name": "LayoutWrapper",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src/app/signals/create/page.tsx:96:6",
            "data-orchids-name": "div",
            className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/app/signals/create/page.tsx:98:8",
                    "data-orchids-name": "div",
                    className: "mb-8 flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            "data-orchids-id": "src/app/signals/create/page.tsx:99:10",
                            "data-orchids-name": "Link",
                            href: "/dashboard",
                            className: "p-2 rounded-lg hover:bg-accent transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                "data-orchids-id": "src/app/signals/create/page.tsx:103:12",
                                "data-orchids-name": "ArrowLeft",
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/signals/create/page.tsx:105:10",
                            "data-orchids-name": "div",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    "data-orchids-id": "src/app/signals/create/page.tsx:106:12",
                                    "data-orchids-name": "h1",
                                    className: "text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2",
                                    children: "Create Trading Signal"
                                }, void 0, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    "data-orchids-id": "src/app/signals/create/page.tsx:109:12",
                                    "data-orchids-name": "p",
                                    className: "text-muted-foreground",
                                    children: "Configure your auto-trading signal parameters"
                                }, void 0, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/app/signals/create/page.tsx:115:8",
                    "data-orchids-name": "div",
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
                            "data-orchids-id": "src/app/signals/create/page.tsx:117:10",
                            "data-orchids-name": "GlassCard",
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                "data-orchids-id": "src/app/signals/create/page.tsx:118:12",
                                "data-orchids-name": "form",
                                onSubmit: handleSubmit(onSubmit),
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/signals/create/page.tsx:120:14",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                "data-orchids-id": "src/app/signals/create/page.tsx:121:16",
                                                "data-orchids-name": "Label",
                                                htmlFor: "signal_id",
                                                children: [
                                                    "Signal ID ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:122:28",
                                                        "data-orchids-name": "span",
                                                        className: "text-xs text-muted-foreground",
                                                        children: "(optional - auto-generated)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                "data-orchids-id": "src/app/signals/create/page.tsx:124:16",
                                                "data-orchids-name": "Input",
                                                id: "signal_id",
                                                placeholder: "Leave blank to auto-generate",
                                                ...register('signal_id')
                                            }, void 0, false, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/signals/create/page.tsx:132:14",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                "data-orchids-id": "src/app/signals/create/page.tsx:133:16",
                                                "data-orchids-name": "Label",
                                                children: "Trade Side"
                                            }, void 0, false, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/app/signals/create/page.tsx:134:16",
                                                "data-orchids-name": "div",
                                                className: "flex gap-2 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:135:18",
                                                        "data-orchids-name": "Button",
                                                        type: "button",
                                                        onClick: ()=>setValue('side', 'BUY'),
                                                        className: `flex-1 ${formData.side === 'BUY' ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-accent text-foreground'}`,
                                                        children: "BUY"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:146:18",
                                                        "data-orchids-name": "Button",
                                                        type: "button",
                                                        onClick: ()=>setValue('side', 'SELL'),
                                                        className: `flex-1 ${formData.side === 'SELL' ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-accent text-foreground'}`,
                                                        children: "SELL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/signals/create/page.tsx:161:14",
                                        "data-orchids-name": "div",
                                        className: "space-y-4 p-4 rounded-lg bg-accent/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                "data-orchids-id": "src/app/signals/create/page.tsx:162:16",
                                                "data-orchids-name": "h3",
                                                className: "font-semibold",
                                                children: "Symbol Details"
                                            }, void 0, false, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/app/signals/create/page.tsx:164:16",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:165:18",
                                                        "data-orchids-name": "Label",
                                                        htmlFor: "index",
                                                        children: "Index"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                        value: formData.index,
                                                        onValueChange: (value)=>setValue('index', value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                "data-orchids-id": "src/app/signals/create/page.tsx:170:20",
                                                                "data-orchids-name": "SelectTrigger",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                    "data-orchids-id": "src/app/signals/create/page.tsx:171:22",
                                                                    "data-orchids-name": "SelectValue"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                "data-orchids-id": "src/app/signals/create/page.tsx:173:20",
                                                                "data-orchids-name": "SelectContent",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        "data-orchids-id": "src/app/signals/create/page.tsx:174:22",
                                                                        "data-orchids-name": "SelectItem",
                                                                        value: "NIFTY",
                                                                        children: "NIFTY"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                                        lineNumber: 174,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        "data-orchids-id": "src/app/signals/create/page.tsx:175:22",
                                                                        "data-orchids-name": "SelectItem",
                                                                        value: "BANKNIFTY",
                                                                        children: "BANKNIFTY"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                                        lineNumber: 175,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        "data-orchids-id": "src/app/signals/create/page.tsx:176:22",
                                                                        "data-orchids-name": "SelectItem",
                                                                        value: "FINNIFTY",
                                                                        children: "FINNIFTY"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                                        lineNumber: 176,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/app/signals/create/page.tsx:181:16",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:182:18",
                                                        "data-orchids-name": "Label",
                                                        htmlFor: "strike",
                                                        children: "Strike Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:183:18",
                                                        "data-orchids-name": "Input",
                                                        id: "strike",
                                                        type: "number",
                                                        placeholder: "e.g., 19000",
                                                        ...register('strike', {
                                                            required: 'Strike is required',
                                                            min: 1
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.strike && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:190:20",
                                                        "data-orchids-name": "p",
                                                        className: "text-xs text-red-500 mt-1",
                                                        children: errors.strike.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/app/signals/create/page.tsx:194:16",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:195:18",
                                                        "data-orchids-name": "Label",
                                                        htmlFor: "type",
                                                        children: "Option Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                        value: formData.type,
                                                        onValueChange: (value)=>setValue('type', value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                "data-orchids-id": "src/app/signals/create/page.tsx:200:20",
                                                                "data-orchids-name": "SelectTrigger",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                    "data-orchids-id": "src/app/signals/create/page.tsx:201:22",
                                                                    "data-orchids-name": "SelectValue"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                "data-orchids-id": "src/app/signals/create/page.tsx:203:20",
                                                                "data-orchids-name": "SelectContent",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        "data-orchids-id": "src/app/signals/create/page.tsx:204:22",
                                                                        "data-orchids-name": "SelectItem",
                                                                        value: "CE",
                                                                        children: "CE (Call)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                                        lineNumber: 204,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        "data-orchids-id": "src/app/signals/create/page.tsx:205:22",
                                                                        "data-orchids-name": "SelectItem",
                                                                        value: "PE",
                                                                        children: "PE (Put)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                                        lineNumber: 205,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        "data-orchids-id": "src/app/signals/create/page.tsx:206:22",
                                                                        "data-orchids-name": "SelectItem",
                                                                        value: "FUT",
                                                                        children: "FUT (Future)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                                        lineNumber: 206,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                lineNumber: 194,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/app/signals/create/page.tsx:211:16",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:212:18",
                                                        "data-orchids-name": "Label",
                                                        htmlFor: "expiry",
                                                        children: "Expiry Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:213:18",
                                                        "data-orchids-name": "Input",
                                                        id: "expiry",
                                                        type: "date",
                                                        ...register('expiry', {
                                                            required: 'Expiry is required'
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.expiry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:219:20",
                                                        "data-orchids-name": "p",
                                                        className: "text-xs text-red-500 mt-1",
                                                        children: errors.expiry.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/signals/create/page.tsx:225:14",
                                        "data-orchids-name": "div",
                                        className: "space-y-4 p-4 rounded-lg bg-accent/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                "data-orchids-id": "src/app/signals/create/page.tsx:226:16",
                                                "data-orchids-name": "h3",
                                                className: "font-semibold",
                                                children: "Order Parameters"
                                            }, void 0, false, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/app/signals/create/page.tsx:228:16",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:229:18",
                                                        "data-orchids-name": "Label",
                                                        htmlFor: "entry_type",
                                                        children: "Entry Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                        value: formData.entry_type,
                                                        onValueChange: (value)=>setValue('entry_type', value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                "data-orchids-id": "src/app/signals/create/page.tsx:234:20",
                                                                "data-orchids-name": "SelectTrigger",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                    "data-orchids-id": "src/app/signals/create/page.tsx:235:22",
                                                                    "data-orchids-name": "SelectValue"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                "data-orchids-id": "src/app/signals/create/page.tsx:237:20",
                                                                "data-orchids-name": "SelectContent",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        "data-orchids-id": "src/app/signals/create/page.tsx:238:22",
                                                                        "data-orchids-name": "SelectItem",
                                                                        value: "ABOVE",
                                                                        children: "ABOVE"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                                        lineNumber: 238,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        "data-orchids-id": "src/app/signals/create/page.tsx:239:22",
                                                                        "data-orchids-name": "SelectItem",
                                                                        value: "BELOW",
                                                                        children: "BELOW"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                                        lineNumber: 239,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        "data-orchids-id": "src/app/signals/create/page.tsx:240:22",
                                                                        "data-orchids-name": "SelectItem",
                                                                        value: "AT",
                                                                        children: "AT"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                                        lineNumber: 240,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/app/signals/create/page.tsx:245:16",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:246:18",
                                                        "data-orchids-name": "Label",
                                                        htmlFor: "entry_price",
                                                        children: "Entry Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:247:18",
                                                        "data-orchids-name": "Input",
                                                        id: "entry_price",
                                                        type: "number",
                                                        step: "0.01",
                                                        placeholder: "e.g., 100.50",
                                                        ...register('entry_price', {
                                                            required: 'Entry price is required',
                                                            min: 0
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.entry_price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:255:20",
                                                        "data-orchids-name": "p",
                                                        className: "text-xs text-red-500 mt-1",
                                                        children: errors.entry_price.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                lineNumber: 245,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/app/signals/create/page.tsx:259:16",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:260:18",
                                                        "data-orchids-name": "Label",
                                                        htmlFor: "stoploss",
                                                        children: "Stop Loss"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:261:18",
                                                        "data-orchids-name": "Input",
                                                        id: "stoploss",
                                                        type: "number",
                                                        step: "0.01",
                                                        placeholder: "e.g., 90.00",
                                                        ...register('stoploss', {
                                                            required: 'Stop loss is required',
                                                            min: 0
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.stoploss && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:269:20",
                                                        "data-orchids-name": "p",
                                                        className: "text-xs text-red-500 mt-1",
                                                        children: errors.stoploss.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/app/signals/create/page.tsx:273:16",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:274:18",
                                                        "data-orchids-name": "Label",
                                                        htmlFor: "target",
                                                        children: "Target"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:275:18",
                                                        "data-orchids-name": "Input",
                                                        id: "target",
                                                        type: "number",
                                                        step: "0.01",
                                                        placeholder: "e.g., 120.00",
                                                        ...register('target', {
                                                            required: 'Target is required',
                                                            min: 0
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.target && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:283:20",
                                                        "data-orchids-name": "p",
                                                        className: "text-xs text-red-500 mt-1",
                                                        children: errors.target.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/app/signals/create/page.tsx:287:16",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:288:18",
                                                        "data-orchids-name": "Label",
                                                        htmlFor: "quantity",
                                                        children: "Quantity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:289:18",
                                                        "data-orchids-name": "Input",
                                                        id: "quantity",
                                                        type: "number",
                                                        placeholder: "e.g., 50",
                                                        ...register('quantity', {
                                                            required: 'Quantity is required',
                                                            min: 1
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.quantity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:296:20",
                                                        "data-orchids-name": "p",
                                                        className: "text-xs text-red-500 mt-1",
                                                        children: errors.quantity.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                lineNumber: 287,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        "data-orchids-id": "src/app/signals/create/page.tsx:302:14",
                                        "data-orchids-name": "Button",
                                        type: "submit",
                                        disabled: loading,
                                        className: "w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white",
                                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: "Processing..."
                                        }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    "data-orchids-id": "src/app/signals/create/page.tsx:311:20",
                                                    "data-orchids-name": "Send",
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 21
                                                }, this),
                                                "Create Signal"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/signals/create/page.tsx:320:10",
                            "data-orchids-name": "div",
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
                                    "data-orchids-id": "src/app/signals/create/page.tsx:321:12",
                                    "data-orchids-name": "GlassCard",
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/signals/create/page.tsx:322:14",
                                            "data-orchids-name": "div",
                                            className: "flex items-center justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    "data-orchids-id": "src/app/signals/create/page.tsx:323:16",
                                                    "data-orchids-name": "h3",
                                                    className: "font-semibold",
                                                    children: "JSON Preview"
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-orchids-id": "src/app/signals/create/page.tsx:324:16",
                                                    "data-orchids-name": "Button",
                                                    type: "button",
                                                    size: "sm",
                                                    variant: "ghost",
                                                    onClick: ()=>setShowPreview(!showPreview),
                                                    children: showPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:330:33",
                                                        "data-orchids-name": "EyeOff",
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 34
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        "data-orchids-id": "src/app/signals/create/page.tsx:330:66",
                                                        "data-orchids-name": "Eye",
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 151
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, this),
                                        showPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            "data-orchids-id": "src/app/signals/create/page.tsx:334:16",
                                            "data-orchids-name": "pre",
                                            className: "bg-black/5 dark:bg-white/5 p-4 rounded-lg overflow-x-auto text-xs",
                                            children: JSON.stringify(buildSignal(formData), null, 2)
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
                                    "data-orchids-id": "src/app/signals/create/page.tsx:341:12",
                                    "data-orchids-name": "GlassCard",
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            "data-orchids-id": "src/app/signals/create/page.tsx:342:14",
                                            "data-orchids-name": "h3",
                                            className: "font-semibold mb-3",
                                            children: "Quick Guide"
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                            lineNumber: 342,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            "data-orchids-id": "src/app/signals/create/page.tsx:343:14",
                                            "data-orchids-name": "ul",
                                            className: "space-y-2 text-sm text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    "data-orchids-id": "src/app/signals/create/page.tsx:344:16",
                                                    "data-orchids-name": "li",
                                                    children: [
                                                        "• ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            "data-orchids-id": "src/app/signals/create/page.tsx:344:22",
                                                            "data-orchids-name": "strong",
                                                            children: "Signal ID:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 103
                                                        }, this),
                                                        " Auto-generated if left blank"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    "data-orchids-id": "src/app/signals/create/page.tsx:345:16",
                                                    "data-orchids-name": "li",
                                                    children: [
                                                        "• ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            "data-orchids-id": "src/app/signals/create/page.tsx:345:22",
                                                            "data-orchids-name": "strong",
                                                            children: "Entry Type:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 103
                                                        }, this),
                                                        " ABOVE/BELOW/AT market price"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    "data-orchids-id": "src/app/signals/create/page.tsx:346:16",
                                                    "data-orchids-name": "li",
                                                    children: [
                                                        "• ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            "data-orchids-id": "src/app/signals/create/page.tsx:346:22",
                                                            "data-orchids-name": "strong",
                                                            children: "Stop Loss:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 103
                                                        }, this),
                                                        " Exit price if trade goes against you"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    "data-orchids-id": "src/app/signals/create/page.tsx:347:16",
                                                    "data-orchids-name": "li",
                                                    children: [
                                                        "• ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            "data-orchids-id": "src/app/signals/create/page.tsx:347:22",
                                                            "data-orchids-name": "strong",
                                                            children: "Target:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 103
                                                        }, this),
                                                        " Exit price for profit booking"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    "data-orchids-id": "src/app/signals/create/page.tsx:348:16",
                                                    "data-orchids-name": "li",
                                                    children: [
                                                        "• ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            "data-orchids-id": "src/app/signals/create/page.tsx:348:22",
                                                            "data-orchids-name": "strong",
                                                            children: "Quantity:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                            lineNumber: 348,
                                                            columnNumber: 103
                                                        }, this),
                                                        " Number of contracts/lots"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/create/page.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(CreateSignalPage, "oU9pYdYyNC56lZfbLmxMAEYB7LA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = CreateSignalPage;
var _c;
__turbopack_context__.k.register(_c, "CreateSignalPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=Personal_Designs_trading-signal-dashboard_src_91917807._.js.map