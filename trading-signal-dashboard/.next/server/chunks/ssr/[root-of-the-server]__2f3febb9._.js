module.exports = {

"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/components/theme-toggle.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeToggle": (()=>ThemeToggle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function ThemeToggle() {
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check initial theme
        const isDarkMode = document.documentElement.classList.contains('dark');
        setIsDark(isDarkMode);
    }, []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        "data-orchids-id": "src/components/theme-toggle.tsx:29:4@toggleTheme",
        "data-orchids-name": "button",
        onClick: toggleTheme,
        className: "p-2 rounded-lg hover:bg-accent transition-colors",
        "aria-label": "Toggle theme",
        children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            "data-orchids-id": "src/components/theme-toggle.tsx:35:8",
            "data-orchids-name": "Sun",
            className: "w-5 h-5 text-foreground"
        }, void 0, false, {
            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/theme-toggle.tsx",
            lineNumber: 35,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
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
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn),
    "formatCurrency": (()=>formatCurrency),
    "formatTimestamp": (()=>formatTimestamp),
    "generateSignalId": (()=>generateSignalId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
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
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Navbar": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/theme-toggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Navbar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            href: '/dashboard',
            label: 'Dashboard',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
        },
        {
            href: '/signals/create',
            label: 'Create Signal',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "data-orchids-id": "src/components/navbar.tsx:20:4",
        "data-orchids-name": "nav",
        className: "sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-white/20 dark:border-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src/components/navbar.tsx:21:6",
            "data-orchids-name": "div",
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/navbar.tsx:22:8",
                    "data-orchids-name": "div",
                    className: "flex justify-between items-center h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            "data-orchids-id": "src/components/navbar.tsx:24:10",
                            "data-orchids-name": "Link",
                            href: "/dashboard",
                            className: "flex items-center space-x-2 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/components/navbar.tsx:25:12",
                                    "data-orchids-name": "div",
                                    className: "w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/navbar.tsx:34:10",
                            "data-orchids-name": "div",
                            className: "hidden md:flex items-center space-x-1",
                            children: navItems.map((item)=>{
                                const Icon = item.icon;
                                const isActive = pathname === item.href;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    "data-orchids-id": "src/components/navbar.tsx:39:16@navItems",
                                    "data-orchids-name": "Link",
                                    href: item.href,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center space-x-2 px-4 py-2 rounded-lg transition-all', isActive ? 'bg-primary text-primary-foreground shadow-lg' : 'hover:bg-accent text-foreground'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            "data-orchids-id": "src/components/navbar.tsx:49:18@navItems",
                                            "data-orchids-name": "Icon",
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                                            lineNumber: 49,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/navbar.tsx:57:10",
                            "data-orchids-name": "div",
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {
                                    "data-orchids-id": "src/components/navbar.tsx:58:12",
                                    "data-orchids-name": "ThemeToggle"
                                }, void 0, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-orchids-id": "src/components/navbar.tsx:59:12",
                                    "data-orchids-name": "button",
                                    onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                    className: "md:hidden p-2 rounded-lg hover:bg-accent",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
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
                mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/navbar.tsx:70:10",
                    "data-orchids-name": "div",
                    className: "md:hidden py-4 space-y-2",
                    children: navItems.map((item)=>{
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            "data-orchids-id": "src/components/navbar.tsx:75:16@navItems",
                            "data-orchids-name": "Link",
                            href: item.href,
                            onClick: ()=>setMobileMenuOpen(false),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center space-x-2 px-4 py-3 rounded-lg transition-all', isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-accent text-foreground'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    "data-orchids-id": "src/components/navbar.tsx:86:18@navItems",
                                    "data-orchids-name": "Icon",
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx",
                                    lineNumber: 86,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/components/layout-wrapper.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LayoutWrapper": (()=>LayoutWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function LayoutWrapper({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Initialize theme from localStorage
        const theme = localStorage.getItem('theme');
        if (theme === 'dark' || !theme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navbar"], {
                "data-orchids-id": "src/components/layout-wrapper.tsx:18:6",
                "data-orchids-name": "Navbar"
            }, void 0, false, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/layout-wrapper.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                "data-orchids-id": "src/components/layout-wrapper.tsx:19:6",
                "data-orchids-name": "main",
                className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-black dark:to-purple-950",
                children: children
            }, void 0, false, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/layout-wrapper.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
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
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/glass-card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GlassCard": (()=>GlassCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function GlassCard({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/glass-card.tsx:10:4",
        "data-orchids-name": "div",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('backdrop-blur-xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10', 'rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300', 'hover:border-white/30 dark:hover:border-white/20', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/glass-card.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/status-badge.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "StatusBadge": (()=>StatusBadge)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function StatusBadge({ status, className }) {
    const statusStyles = {
        monitoring: 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 border-blue-500/20',
        completed: 'bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400 border-green-500/20',
        failed: 'bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400 border-red-500/20',
        accepted: 'bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400 border-purple-500/20',
        pending: 'bg-yellow-500/10 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400 border-yellow-500/20',
        active: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border-emerald-500/20'
    };
    const style = statusStyles[status.toLowerCase()] || statusStyles.pending;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-orchids-id": "src/components/ui/status-badge.tsx:21:4",
        "data-orchids-name": "span",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm', style, className),
        children: status.toUpperCase()
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/status-badge.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/loader.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FullPageLoader": (()=>FullPageLoader),
    "Loader": (()=>Loader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Loader({ className, size = 'md' }) {
    const sizeClasses = {
        sm: 'w-4 h-4 border-2',
        md: 'w-8 h-8 border-3',
        lg: 'w-12 h-12 border-4'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/loader.tsx:16:4",
        "data-orchids-name": "div",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('animate-spin rounded-full border-primary border-t-transparent', sizeClasses[size], className)
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/loader.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
function FullPageLoader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/loader.tsx:28:4",
        "data-orchids-name": "div",
        className: "flex items-center justify-center min-h-screen bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src/components/ui/loader.tsx:29:6",
            "data-orchids-name": "div",
            className: "text-center space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Loader, {
                    size: "lg"
                }, void 0, false, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/loader.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    "data-orchids-id": "src/components/ui/loader.tsx:31:8",
                    "data-orchids-name": "p",
                    className: "text-muted-foreground",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/loader.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/loader.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/loader.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-orchids-id": "src/components/ui/button.tsx:51:4",
        "data-orchids-name": "Comp",
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
;
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/input.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        "data-orchids-id": "src/components/ui/input.tsx:7:4",
        "data-orchids-name": "input",
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/http2 [external] (http2, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/lib/api-client.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "tradeApi": (()=>tradeApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
// Create axios instance with base URL
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
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
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/hooks/use-websocket.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useWebSocket": (()=>useWebSocket)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useWebSocket(signal_id, options = {}) {
    const { onMessage, onConnect, onDisconnect, onError, reconnectAttempts = 5, reconnectInterval = 3000 } = options;
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastMessage, setLastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const wsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reconnectCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const reconnectTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const connect = ()=>{
        try {
            // Use ws:// for localhost:8000
            const ws = new WebSocket(`ws://localhost:8000/ws/${signal_id}`);
            wsRef.current = ws;
            ws.onopen = ()=>{
                console.log(`WebSocket connected for signal: ${signal_id}`);
                setIsConnected(true);
                reconnectCountRef.current = 0;
                onConnect?.();
            };
            ws.onmessage = (event)=>{
                try {
                    const message = JSON.parse(event.data);
                    setLastMessage(message);
                    onMessage?.(message);
                } catch (error) {
                    console.error('Failed to parse WebSocket message:', error);
                }
            };
            ws.onerror = (error)=>{
                console.error('WebSocket error:', error);
                onError?.(error);
            };
            ws.onclose = ()=>{
                console.log(`WebSocket disconnected for signal: ${signal_id}`);
                setIsConnected(false);
                onDisconnect?.();
                // Attempt to reconnect
                if (reconnectCountRef.current < reconnectAttempts) {
                    reconnectCountRef.current++;
                    console.log(`Reconnecting... (attempt ${reconnectCountRef.current}/${reconnectAttempts})`);
                    reconnectTimeoutRef.current = setTimeout(()=>{
                        connect();
                    }, reconnectInterval);
                } else {
                    console.log('Max reconnection attempts reached');
                }
            };
        } catch (error) {
            console.error('Failed to create WebSocket connection:', error);
        }
    };
    const disconnect = ()=>{
        if (reconnectTimeoutRef.current) {
            clearTimeout(reconnectTimeoutRef.current);
        }
        if (wsRef.current) {
            wsRef.current.close();
            wsRef.current = null;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        connect();
        return ()=>{
            disconnect();
        };
    }, [
        signal_id
    ]);
    return {
        isConnected,
        lastMessage,
        disconnect,
        reconnect: connect
    };
}
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SignalDetailsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-ssr] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$layout$2d$wrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/layout-wrapper.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/glass-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$status$2d$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/status-badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/loader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/api-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$hooks$2f$use$2d$websocket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/hooks/use-websocket.ts [app-ssr] (ecmascript)");
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
function SignalDetailsPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const signal_id = params.id;
    const [signal, setSignal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [livePrice, setLivePrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editedSL, setEditedSL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [editedTarget, setEditedTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isUpdating, setIsUpdating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // WebSocket for real-time updates
    const { isConnected, lastMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$hooks$2f$use$2d$websocket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWebSocket"])(signal_id, {
        onMessage: (message)=>{
            console.log('WebSocket message:', message);
            setLivePrice(message.price);
            // Update status if changed
            if (signal && message.status !== signal.status) {
                setSignal((prev)=>prev ? {
                        ...prev,
                        status: message.status
                    } : null);
            }
        },
        onConnect: ()=>{
            console.log('WebSocket connected');
            __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Real-time updates connected');
        },
        onDisconnect: ()=>{
            console.log('WebSocket disconnected');
            __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info('Real-time updates disconnected');
        },
        onError: (error)=>{
            console.error('WebSocket error:', error);
        }
    });
    const fetchSignal = async ()=>{
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tradeApi"].getStatus(signal_id);
            setSignal(data);
            setError(null);
            // Initialize edit fields
            if (data.stoploss !== undefined) {
                setEditedSL(data.stoploss.toString());
            }
            if (data.target !== undefined) {
                setEditedTarget(data.target.toString());
            }
            if (data.live_price !== undefined) {
                setLivePrice(data.live_price);
            }
        } catch (err) {
            console.error('Failed to fetch signal:', err);
            setError(err.response?.data?.detail || err.message || 'Failed to fetch signal');
            __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Failed to fetch signal details');
        } finally{
            setLoading(false);
        }
    };
    // Fallback polling every 3 seconds (when WebSocket is not connected)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchSignal();
        const interval = setInterval(()=>{
            if (!isConnected) {
                fetchSignal();
            }
        }, 3000);
        return ()=>clearInterval(interval);
    }, [
        signal_id,
        isConnected
    ]);
    const handleUpdateSignal = async ()=>{
        if (!signal) return;
        const newSL = parseFloat(editedSL);
        const newTarget = parseFloat(editedTarget);
        if (isNaN(newSL) || isNaN(newTarget)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Please enter valid numbers');
            return;
        }
        if (newSL <= 0 || newTarget <= 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Stop loss and target must be greater than 0');
            return;
        }
        setIsUpdating(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tradeApi"].updateTrade(signal_id, {
                stoploss: newSL,
                target: newTarget
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Signal updated successfully');
            setIsEditing(false);
            // Refresh signal data
            await fetchSignal();
        } catch (err) {
            console.error('Failed to update signal:', err);
            __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err.response?.data?.detail || 'Failed to update signal');
        } finally{
            setIsUpdating(false);
        }
    };
    const handleCancelEdit = ()=>{
        setIsEditing(false);
        if (signal?.stoploss !== undefined) {
            setEditedSL(signal.stoploss.toString());
        }
        if (signal?.target !== undefined) {
            setEditedTarget(signal.target.toString());
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$layout$2d$wrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayoutWrapper"], {
            "data-orchids-id": "src/app/signals/[id]/page.tsx:139:6",
            "data-orchids-name": "LayoutWrapper",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/app/signals/[id]/page.tsx:140:8",
                "data-orchids-name": "div",
                className: "flex items-center justify-center min-h-[60vh]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/app/signals/[id]/page.tsx:141:10",
                    "data-orchids-name": "div",
                    className: "text-center space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Loader"], {
                            size: "lg"
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "src/app/signals/[id]/page.tsx:143:12",
                            "data-orchids-name": "p",
                            className: "text-muted-foreground",
                            children: "Loading signal details..."
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                    lineNumber: 141,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this);
    }
    if (error || !signal) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$layout$2d$wrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayoutWrapper"], {
            "data-orchids-id": "src/app/signals/[id]/page.tsx:152:6",
            "data-orchids-name": "LayoutWrapper",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/app/signals/[id]/page.tsx:153:8",
                "data-orchids-name": "div",
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassCard"], {
                    "data-orchids-id": "src/app/signals/[id]/page.tsx:154:10",
                    "data-orchids-name": "GlassCard",
                    className: "p-12 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            "data-orchids-id": "src/app/signals/[id]/page.tsx:155:12",
                            "data-orchids-name": "AlertCircle",
                            className: "w-16 h-16 mx-auto mb-4 text-red-500"
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            "data-orchids-id": "src/app/signals/[id]/page.tsx:156:12",
                            "data-orchids-name": "h3",
                            className: "text-xl font-semibold mb-2",
                            children: "Failed to Load Signal"
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                            lineNumber: 156,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "src/app/signals/[id]/page.tsx:157:12",
                            "data-orchids-name": "p",
                            className: "text-muted-foreground mb-6",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/signals/[id]/page.tsx:158:12",
                            "data-orchids-name": "div",
                            className: "flex gap-4 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:159:14",
                                    "data-orchids-name": "Button",
                                    onClick: ()=>router.push('/dashboard'),
                                    variant: "outline",
                                    children: "Back to Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:162:14@fetchSignal",
                                    "data-orchids-name": "Button",
                                    onClick: fetchSignal,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:163:16",
                                            "data-orchids-name": "RefreshCw",
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this),
                                        "Retry"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
            lineNumber: 152,
            columnNumber: 7
        }, this);
    }
    const timeSinceStart = signal.started_at ? Math.floor((Date.now() / 1000 - signal.started_at) / 60) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$layout$2d$wrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayoutWrapper"], {
        "data-orchids-id": "src/app/signals/[id]/page.tsx:178:4",
        "data-orchids-name": "LayoutWrapper",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src/app/signals/[id]/page.tsx:179:6",
            "data-orchids-name": "div",
            className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/app/signals/[id]/page.tsx:181:8",
                    "data-orchids-name": "div",
                    className: "mb-8 flex items-start justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/signals/[id]/page.tsx:182:10",
                            "data-orchids-name": "div",
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:183:12",
                                    "data-orchids-name": "Link",
                                    href: "/dashboard",
                                    className: "p-2 rounded-lg hover:bg-accent transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        "data-orchids-id": "src/app/signals/[id]/page.tsx:187:14",
                                        "data-orchids-name": "ArrowLeft",
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:189:12",
                                    "data-orchids-name": "div",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:190:14",
                                            "data-orchids-name": "h1",
                                            className: "text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2",
                                            children: signal_id
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:193:14",
                                            "data-orchids-name": "div",
                                            className: "flex items-center gap-3 text-sm text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:194:16",
                                                    "data-orchids-name": "div",
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:195:18",
                                                            "data-orchids-name": "Clock",
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:196:18",
                                                            "data-orchids-name": "span",
                                                            children: [
                                                                timeSinceStart,
                                                                " minutes ago"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:198:16",
                                                    "data-orchids-name": "div",
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:199:18",
                                                            "data-orchids-name": "div",
                                                            className: `w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:200:18",
                                                            "data-orchids-name": "span",
                                                            children: isConnected ? 'WebSocket connected' : 'Polling mode'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$status$2d$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBadge"], {
                            "data-orchids-id": "src/app/signals/[id]/page.tsx:205:10",
                            "data-orchids-name": "StatusBadge",
                            status: signal.status
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this),
                livePrice !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassCard"], {
                    "data-orchids-id": "src/app/signals/[id]/page.tsx:210:10",
                    "data-orchids-name": "GlassCard",
                    className: "p-6 mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/signals/[id]/page.tsx:211:12",
                        "data-orchids-name": "div",
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/app/signals/[id]/page.tsx:212:14",
                                "data-orchids-name": "div",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/app/signals/[id]/page.tsx:213:16",
                                        "data-orchids-name": "p",
                                        className: "text-sm text-muted-foreground mb-1",
                                        children: "Live Price"
                                    }, void 0, false, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/app/signals/[id]/page.tsx:214:16",
                                        "data-orchids-name": "p",
                                        className: "text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(livePrice)
                                    }, void 0, false, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, this),
                                    lastMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/app/signals/[id]/page.tsx:218:18",
                                        "data-orchids-name": "p",
                                        className: "text-xs text-muted-foreground mt-1",
                                        children: [
                                            "Updated ",
                                            new Date(lastMessage.timestamp * 1000).toLocaleTimeString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                lineNumber: 212,
                                columnNumber: 15
                            }, this),
                            isConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/app/signals/[id]/page.tsx:224:16",
                                "data-orchids-name": "div",
                                className: "flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/signals/[id]/page.tsx:225:18",
                                        "data-orchids-name": "div",
                                        className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "src/app/signals/[id]/page.tsx:226:18",
                                        "data-orchids-name": "span",
                                        className: "text-xs font-medium text-green-600",
                                        children: "Real-time"
                                    }, void 0, false, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                lineNumber: 224,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                        lineNumber: 211,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                    lineNumber: 210,
                    columnNumber: 11
                }, this),
                (signal.stoploss !== undefined || signal.target !== undefined) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassCard"], {
                    "data-orchids-id": "src/app/signals/[id]/page.tsx:235:10",
                    "data-orchids-name": "GlassCard",
                    className: "p-6 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/signals/[id]/page.tsx:236:12",
                            "data-orchids-name": "div",
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:237:14",
                                    "data-orchids-name": "h2",
                                    className: "text-xl font-bold",
                                    children: "Stop Loss & Target"
                                }, void 0, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this),
                                !isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:239:16",
                                    "data-orchids-name": "Button",
                                    onClick: ()=>setIsEditing(true),
                                    variant: "outline",
                                    size: "sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:244:18",
                                            "data-orchids-name": "Edit2",
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 19
                                        }, this),
                                        "Edit"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                    lineNumber: 239,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:248:16",
                                    "data-orchids-name": "div",
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:249:18@handleCancelEdit",
                                            "data-orchids-name": "Button",
                                            onClick: handleCancelEdit,
                                            variant: "outline",
                                            size: "sm",
                                            disabled: isUpdating,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:255:20",
                                                    "data-orchids-name": "X",
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 21
                                                }, this),
                                                "Cancel"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:258:18@handleUpdateSignal",
                                            "data-orchids-name": "Button",
                                            onClick: handleUpdateSignal,
                                            size: "sm",
                                            disabled: isUpdating,
                                            children: [
                                                isUpdating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Loader"], {
                                                    size: "sm",
                                                    className: "mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:266:22",
                                                    "data-orchids-name": "Save",
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 23
                                                }, this),
                                                "Save"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                            lineNumber: 236,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/signals/[id]/page.tsx:274:12",
                            "data-orchids-name": "div",
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:275:14",
                                    "data-orchids-name": "div",
                                    className: "p-4 rounded-lg bg-red-500/5 border border-red-500/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:276:16",
                                            "data-orchids-name": "p",
                                            className: "text-xs text-muted-foreground mb-2",
                                            children: "Stop Loss"
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this),
                                        isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:278:18",
                                            "data-orchids-name": "Input",
                                            type: "number",
                                            step: "0.01",
                                            value: editedSL,
                                            onChange: (e)=>setEditedSL(e.target.value),
                                            className: "text-lg font-bold"
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 278,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:286:18",
                                            "data-orchids-name": "p",
                                            className: "text-2xl font-bold text-red-600",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(signal.stoploss || 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 286,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:292:14",
                                    "data-orchids-name": "div",
                                    className: "p-4 rounded-lg bg-green-500/5 border border-green-500/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:293:16",
                                            "data-orchids-name": "p",
                                            className: "text-xs text-muted-foreground mb-2",
                                            children: "Target"
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 293,
                                            columnNumber: 17
                                        }, this),
                                        isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:295:18",
                                            "data-orchids-name": "Input",
                                            type: "number",
                                            step: "0.01",
                                            value: editedTarget,
                                            onChange: (e)=>setEditedTarget(e.target.value),
                                            className: "text-lg font-bold"
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:303:18",
                                            "data-orchids-name": "p",
                                            className: "text-2xl font-bold text-green-600",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(signal.target || 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 303,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                            lineNumber: 274,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                    lineNumber: 235,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/app/signals/[id]/page.tsx:312:8",
                    "data-orchids-name": "div",
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassCard"], {
                            "data-orchids-id": "src/app/signals/[id]/page.tsx:314:10",
                            "data-orchids-name": "GlassCard",
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:315:12",
                                    "data-orchids-name": "div",
                                    className: "flex items-center gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:316:14",
                                            "data-orchids-name": "div",
                                            className: "w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                "data-orchids-id": "src/app/signals/[id]/page.tsx:317:16",
                                                "data-orchids-name": "TrendingUp",
                                                className: "w-5 h-5 text-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 316,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:319:14",
                                            "data-orchids-name": "h2",
                                            className: "text-xl font-bold",
                                            children: "Entry Order"
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                    lineNumber: 315,
                                    columnNumber: 13
                                }, this),
                                signal.entry_order ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:323:14",
                                    "data-orchids-name": "div",
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:324:16",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center p-3 rounded-lg bg-accent/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:325:18",
                                                    "data-orchids-name": "span",
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$status$2d$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:326:18",
                                                    "data-orchids-name": "StatusBadge",
                                                    status: signal.entry_order.status || 'pending'
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 324,
                                            columnNumber: 17
                                        }, this),
                                        signal.entry_order.order_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:330:18",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center p-3 rounded-lg bg-accent/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:331:20",
                                                    "data-orchids-name": "span",
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Order ID"
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:332:20",
                                                    "data-orchids-name": "span",
                                                    className: "font-mono text-sm",
                                                    children: signal.entry_order.order_id
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 330,
                                            columnNumber: 19
                                        }, this),
                                        signal.entry_order.price !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:337:18",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center p-3 rounded-lg bg-accent/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:338:20",
                                                    "data-orchids-name": "span",
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:339:20",
                                                    "data-orchids-name": "span",
                                                    className: "text-lg font-bold text-blue-600",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(signal.entry_order.price)
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 337,
                                            columnNumber: 19
                                        }, this),
                                        signal.entry_order.quantity !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:346:18",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center p-3 rounded-lg bg-accent/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:347:20",
                                                    "data-orchids-name": "span",
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Quantity"
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:348:20",
                                                    "data-orchids-name": "span",
                                                    className: "font-semibold",
                                                    children: signal.entry_order.quantity
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 346,
                                            columnNumber: 19
                                        }, this),
                                        signal.entry_order.timestamp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:353:18",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center p-3 rounded-lg bg-accent/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:354:20",
                                                    "data-orchids-name": "span",
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Timestamp"
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:355:20",
                                                    "data-orchids-name": "span",
                                                    className: "text-sm",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTimestamp"])(signal.entry_order.timestamp)
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 353,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                    lineNumber: 323,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:360:14",
                                    "data-orchids-name": "div",
                                    className: "text-center py-8 text-muted-foreground",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/app/signals/[id]/page.tsx:361:16",
                                        "data-orchids-name": "p",
                                        children: "No entry order data available"
                                    }, void 0, false, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                        lineNumber: 361,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                    lineNumber: 360,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                            lineNumber: 314,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassCard"], {
                            "data-orchids-id": "src/app/signals/[id]/page.tsx:367:10",
                            "data-orchids-name": "GlassCard",
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:368:12",
                                    "data-orchids-name": "div",
                                    className: "flex items-center gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:369:14",
                                            "data-orchids-name": "div",
                                            className: "w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                "data-orchids-id": "src/app/signals/[id]/page.tsx:370:16",
                                                "data-orchids-name": "TrendingDown",
                                                className: "w-5 h-5 text-green-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                lineNumber: 370,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 369,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:372:14",
                                            "data-orchids-name": "h2",
                                            className: "text-xl font-bold",
                                            children: "Exit Order"
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 372,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                    lineNumber: 368,
                                    columnNumber: 13
                                }, this),
                                signal.exit_order ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:376:14",
                                    "data-orchids-name": "div",
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:377:16",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center p-3 rounded-lg bg-accent/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:378:18",
                                                    "data-orchids-name": "span",
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$status$2d$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:379:18",
                                                    "data-orchids-name": "StatusBadge",
                                                    status: signal.exit_order.status || 'pending'
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 377,
                                            columnNumber: 17
                                        }, this),
                                        signal.exit_order.order_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:383:18",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center p-3 rounded-lg bg-accent/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:384:20",
                                                    "data-orchids-name": "span",
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Order ID"
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:385:20",
                                                    "data-orchids-name": "span",
                                                    className: "font-mono text-sm",
                                                    children: signal.exit_order.order_id
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 383,
                                            columnNumber: 19
                                        }, this),
                                        signal.exit_order.price !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:390:18",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center p-3 rounded-lg bg-accent/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:391:20",
                                                    "data-orchids-name": "span",
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:392:20",
                                                    "data-orchids-name": "span",
                                                    className: "text-lg font-bold text-green-600",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(signal.exit_order.price)
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 390,
                                            columnNumber: 19
                                        }, this),
                                        signal.exit_order.quantity !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:399:18",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center p-3 rounded-lg bg-accent/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:400:20",
                                                    "data-orchids-name": "span",
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Quantity"
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:401:20",
                                                    "data-orchids-name": "span",
                                                    className: "font-semibold",
                                                    children: signal.exit_order.quantity
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 399,
                                            columnNumber: 19
                                        }, this),
                                        signal.exit_order.timestamp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:406:18",
                                            "data-orchids-name": "div",
                                            className: "flex justify-between items-center p-3 rounded-lg bg-accent/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:407:20",
                                                    "data-orchids-name": "span",
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Timestamp"
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:408:20",
                                                    "data-orchids-name": "span",
                                                    className: "text-sm",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTimestamp"])(signal.exit_order.timestamp)
                                                }, void 0, false, {
                                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 406,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                    lineNumber: 376,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:413:14",
                                    "data-orchids-name": "div",
                                    className: "text-center py-8 text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:414:16",
                                            "data-orchids-name": "p",
                                            children: "No exit order yet"
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 414,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            "data-orchids-id": "src/app/signals/[id]/page.tsx:415:16",
                                            "data-orchids-name": "p",
                                            className: "text-xs mt-2",
                                            children: "Waiting for signal completion..."
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                            lineNumber: 415,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                    lineNumber: 413,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                            lineNumber: 367,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, this),
                signal.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassCard"], {
                    "data-orchids-id": "src/app/signals/[id]/page.tsx:423:10",
                    "data-orchids-name": "GlassCard",
                    className: "p-6 mt-6 border-red-500/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/signals/[id]/page.tsx:424:12",
                        "data-orchids-name": "div",
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                "data-orchids-id": "src/app/signals/[id]/page.tsx:425:14",
                                "data-orchids-name": "AlertCircle",
                                className: "w-5 h-5 text-red-500 mt-0.5"
                            }, void 0, false, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                lineNumber: 425,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/app/signals/[id]/page.tsx:426:14",
                                "data-orchids-name": "div",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        "data-orchids-id": "src/app/signals/[id]/page.tsx:427:16",
                                        "data-orchids-name": "h3",
                                        className: "font-semibold text-red-600 mb-1",
                                        children: "Error Occurred"
                                    }, void 0, false, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                        lineNumber: 427,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/app/signals/[id]/page.tsx:428:16",
                                        "data-orchids-name": "p",
                                        className: "text-sm text-red-600/80",
                                        children: signal.error
                                    }, void 0, false, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                        lineNumber: 428,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                lineNumber: 426,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                        lineNumber: 424,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                    lineNumber: 423,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassCard"], {
                    "data-orchids-id": "src/app/signals/[id]/page.tsx:435:8",
                    "data-orchids-name": "GlassCard",
                    className: "p-6 mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            "data-orchids-id": "src/app/signals/[id]/page.tsx:436:10",
                            "data-orchids-name": "h2",
                            className: "text-xl font-bold mb-6",
                            children: "Signal Timeline"
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                            lineNumber: 436,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/signals/[id]/page.tsx:437:10",
                            "data-orchids-name": "div",
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineItem, {
                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:438:12",
                                    "data-orchids-name": "TimelineItem",
                                    title: "Signal Started",
                                    time: signal.started_at,
                                    status: "completed"
                                }, void 0, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                    lineNumber: 438,
                                    columnNumber: 13
                                }, this),
                                signal.entry_order && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineItem, {
                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:444:14",
                                    "data-orchids-name": "TimelineItem",
                                    title: "Entry Order Placed",
                                    time: signal.entry_order.timestamp,
                                    status: signal.entry_order.status || 'pending'
                                }, void 0, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                    lineNumber: 444,
                                    columnNumber: 15
                                }, this),
                                signal.exit_order && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineItem, {
                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:451:14",
                                    "data-orchids-name": "TimelineItem",
                                    title: "Exit Order Placed",
                                    time: signal.exit_order.timestamp,
                                    status: signal.exit_order.status || 'pending'
                                }, void 0, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                    lineNumber: 451,
                                    columnNumber: 15
                                }, this),
                                signal.status === 'completed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineItem, {
                                    "data-orchids-id": "src/app/signals/[id]/page.tsx:458:14",
                                    "data-orchids-name": "TimelineItem",
                                    title: "Signal Completed",
                                    time: Date.now() / 1000,
                                    status: "completed"
                                }, void 0, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                                    lineNumber: 458,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                            lineNumber: 437,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                    lineNumber: 435,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
            lineNumber: 179,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
function TimelineItem({ title, time, status }) {
    const statusColors = {
        completed: 'bg-green-500',
        pending: 'bg-yellow-500',
        failed: 'bg-red-500',
        active: 'bg-blue-500'
    };
    const color = statusColors[status.toLowerCase()] || 'bg-gray-500';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/app/signals/[id]/page.tsx:482:4",
        "data-orchids-name": "div",
        className: "flex items-start gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/app/signals/[id]/page.tsx:483:6",
                "data-orchids-name": "div",
                className: `w-3 h-3 rounded-full ${color} mt-1.5`
            }, void 0, false, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                lineNumber: 483,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/app/signals/[id]/page.tsx:484:6",
                "data-orchids-name": "div",
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        "data-orchids-id": "src/app/signals/[id]/page.tsx:485:8",
                        "data-orchids-name": "h4",
                        className: "font-semibold",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                        lineNumber: 485,
                        columnNumber: 9
                    }, this),
                    time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        "data-orchids-id": "src/app/signals/[id]/page.tsx:487:10",
                        "data-orchids-name": "p",
                        className: "text-sm text-muted-foreground",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTimestamp"])(time)
                    }, void 0, false, {
                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                        lineNumber: 487,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                lineNumber: 484,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$status$2d$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBadge"], {
                "data-orchids-id": "src/app/signals/[id]/page.tsx:490:6",
                "data-orchids-name": "StatusBadge",
                status: status
            }, void 0, false, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/signals/[id]/page.tsx",
        lineNumber: 482,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__2f3febb9._.js.map