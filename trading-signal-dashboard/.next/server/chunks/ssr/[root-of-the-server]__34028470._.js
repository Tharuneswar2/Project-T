module.exports = {

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
"[project]/Personal_Designs/trading-signal-dashboard/src/lib/store.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAutoRefresh": (()=>useAutoRefresh),
    "useSignalStore": (()=>useSignalStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/api-client.ts [app-ssr] (ecmascript)");
;
;
const useSignalStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
                const status = await __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tradeApi"].getStatus(signal_id);
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
    const refreshAllSignals = useSignalStore((state)=>state.refreshAllSignals);
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
};
}}),
"[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DashboardPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-ssr] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/glass-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$status$2d$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/status-badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/loader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$layout$2d$wrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/layout-wrapper.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/lib/utils.ts [app-ssr] (ecmascript)");
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
function DashboardPage() {
    const { signals, loading, refreshAllSignals } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSignalStore"])();
    // Auto-refresh every 3 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        refreshAllSignals();
        const interval = setInterval(()=>{
            refreshAllSignals();
        }, 3000);
        return ()=>clearInterval(interval);
    }, [
        refreshAllSignals
    ]);
    const signalsArray = Array.from(signals.values());
    const activeSignals = signalsArray.filter((s)=>[
            'monitoring',
            'accepted',
            'active',
            'pending',
            'waiting',
            'entered'
        ].includes(s.status.toLowerCase()));
    const completedSignals = signalsArray.filter((s)=>[
            'completed',
            'failed',
            'target-hit',
            'sl-hit',
            'error'
        ].includes(s.status.toLowerCase()));
    // Calculate stats
    const totalActive = activeSignals.length;
    const totalCompleted = completedSignals.length;
    const totalSignals = signalsArray.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$layout$2d$wrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayoutWrapper"], {
        "data-orchids-id": "src/app/dashboard/page.tsx:40:4",
        "data-orchids-name": "LayoutWrapper",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src/app/dashboard/page.tsx:41:6",
            "data-orchids-name": "div",
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/app/dashboard/page.tsx:43:8",
                    "data-orchids-name": "div",
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            "data-orchids-id": "src/app/dashboard/page.tsx:44:10",
                            "data-orchids-name": "h1",
                            className: "text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2",
                            children: "Trading Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "src/app/dashboard/page.tsx:47:10",
                            "data-orchids-name": "p",
                            className: "text-muted-foreground",
                            children: "Monitor your active signals and trading activity in real-time"
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/app/dashboard/page.tsx:53:8",
                    "data-orchids-name": "div",
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassCard"], {
                            "data-orchids-id": "src/app/dashboard/page.tsx:54:10",
                            "data-orchids-name": "GlassCard",
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/app/dashboard/page.tsx:55:12",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/dashboard/page.tsx:56:14",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/app/dashboard/page.tsx:57:16",
                                                "data-orchids-name": "p",
                                                className: "text-sm text-muted-foreground mb-1",
                                                children: "Total Signals"
                                            }, void 0, false, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/app/dashboard/page.tsx:58:16",
                                                "data-orchids-name": "p",
                                                className: "text-3xl font-bold",
                                                children: totalSignals
                                            }, void 0, false, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/dashboard/page.tsx:60:14",
                                        "data-orchids-name": "div",
                                        className: "w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                            "data-orchids-id": "src/app/dashboard/page.tsx:61:16",
                                            "data-orchids-name": "Activity",
                                            className: "w-6 h-6 text-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassCard"], {
                            "data-orchids-id": "src/app/dashboard/page.tsx:66:10",
                            "data-orchids-name": "GlassCard",
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/app/dashboard/page.tsx:67:12",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/dashboard/page.tsx:68:14",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/app/dashboard/page.tsx:69:16",
                                                "data-orchids-name": "p",
                                                className: "text-sm text-muted-foreground mb-1",
                                                children: "Active Signals"
                                            }, void 0, false, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/app/dashboard/page.tsx:70:16",
                                                "data-orchids-name": "p",
                                                className: "text-3xl font-bold text-green-600",
                                                children: totalActive
                                            }, void 0, false, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/dashboard/page.tsx:72:14",
                                        "data-orchids-name": "div",
                                        className: "w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            "data-orchids-id": "src/app/dashboard/page.tsx:73:16",
                                            "data-orchids-name": "TrendingUp",
                                            className: "w-6 h-6 text-green-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassCard"], {
                            "data-orchids-id": "src/app/dashboard/page.tsx:78:10",
                            "data-orchids-name": "GlassCard",
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/app/dashboard/page.tsx:79:12",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/dashboard/page.tsx:80:14",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/app/dashboard/page.tsx:81:16",
                                                "data-orchids-name": "p",
                                                className: "text-sm text-muted-foreground mb-1",
                                                children: "Completed"
                                            }, void 0, false, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/app/dashboard/page.tsx:82:16",
                                                "data-orchids-name": "p",
                                                className: "text-3xl font-bold text-purple-600",
                                                children: totalCompleted
                                            }, void 0, false, {
                                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/dashboard/page.tsx:84:14",
                                        "data-orchids-name": "div",
                                        className: "w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                            "data-orchids-id": "src/app/dashboard/page.tsx:85:16",
                                            "data-orchids-name": "TrendingDown",
                                            className: "w-6 h-6 text-purple-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                loading && signalsArray.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/app/dashboard/page.tsx:93:10",
                    "data-orchids-name": "div",
                    className: "flex justify-center py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Loader"], {
                        size: "lg"
                    }, void 0, false, {
                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, this),
                !loading && signalsArray.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassCard"], {
                    "data-orchids-id": "src/app/dashboard/page.tsx:100:10",
                    "data-orchids-name": "GlassCard",
                    className: "p-12 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                            "data-orchids-id": "src/app/dashboard/page.tsx:101:12",
                            "data-orchids-name": "Activity",
                            className: "w-16 h-16 mx-auto mb-4 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            "data-orchids-id": "src/app/dashboard/page.tsx:102:12",
                            "data-orchids-name": "h3",
                            className: "text-xl font-semibold mb-2",
                            children: "No signals yet"
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "src/app/dashboard/page.tsx:103:12",
                            "data-orchids-name": "p",
                            className: "text-muted-foreground mb-6",
                            children: "Create your first trading signal to get started"
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            "data-orchids-id": "src/app/dashboard/page.tsx:106:12",
                            "data-orchids-name": "Link",
                            href: "/signals/create",
                            className: "inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all",
                            children: "Create Signal"
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this),
                activeSignals.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/app/dashboard/page.tsx:117:10",
                    "data-orchids-name": "div",
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            "data-orchids-id": "src/app/dashboard/page.tsx:118:12",
                            "data-orchids-name": "h2",
                            className: "text-2xl font-bold mb-4 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/dashboard/page.tsx:119:14",
                                    "data-orchids-name": "div",
                                    className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this),
                                "Active Signals"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/dashboard/page.tsx:122:12",
                            "data-orchids-name": "div",
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                            children: activeSignals.map((signal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SignalCard, {
                                    "data-orchids-id": "src/app/dashboard/page.tsx:124:16@activeSignals",
                                    "data-orchids-name": "SignalCard",
                                    signal: signal
                                }, signal.signal_id, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this),
                completedSignals.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/app/dashboard/page.tsx:132:10",
                    "data-orchids-name": "div",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            "data-orchids-id": "src/app/dashboard/page.tsx:133:12",
                            "data-orchids-name": "h2",
                            className: "text-2xl font-bold mb-4",
                            children: "Completed Signals"
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/dashboard/page.tsx:134:12",
                            "data-orchids-name": "div",
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                            children: completedSignals.map((signal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SignalCard, {
                                    "data-orchids-id": "src/app/dashboard/page.tsx:136:16@completedSignals",
                                    "data-orchids-name": "SignalCard",
                                    signal: signal
                                }, signal.signal_id, false, {
                                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                    lineNumber: 132,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function SignalCard({ signal }) {
    const timeSinceStart = signal.started_at ? Math.floor((Date.now() / 1000 - signal.started_at) / 60) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassCard"], {
        "data-orchids-id": "src/app/dashboard/page.tsx:152:4",
        "data-orchids-name": "GlassCard",
        className: "p-6 hover:scale-[1.02] transition-transform",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/app/dashboard/page.tsx:153:6",
                "data-orchids-name": "div",
                className: "flex items-start justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/dashboard/page.tsx:154:8",
                        "data-orchids-name": "div",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                "data-orchids-id": "src/app/dashboard/page.tsx:155:10",
                                "data-orchids-name": "h3",
                                className: "font-semibold text-lg mb-1",
                                children: signal.signal_id
                            }, void 0, false, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/app/dashboard/page.tsx:156:10",
                                "data-orchids-name": "div",
                                className: "flex items-center gap-2 text-sm text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        "data-orchids-id": "src/app/dashboard/page.tsx:157:12",
                                        "data-orchids-name": "Clock",
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "src/app/dashboard/page.tsx:158:12",
                                        "data-orchids-name": "span",
                                        children: [
                                            timeSinceStart,
                                            " min ago"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$status$2d$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBadge"], {
                        "data-orchids-id": "src/app/dashboard/page.tsx:161:8",
                        "data-orchids-name": "StatusBadge",
                        status: signal.status
                    }, void 0, false, {
                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            signal.live_price !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/app/dashboard/page.tsx:166:8",
                "data-orchids-name": "div",
                className: "mb-4 p-3 rounded-lg bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        "data-orchids-id": "src/app/dashboard/page.tsx:167:10",
                        "data-orchids-name": "p",
                        className: "text-xs text-muted-foreground mb-1",
                        children: "Live Price"
                    }, void 0, false, {
                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/dashboard/page.tsx:168:10",
                        "data-orchids-name": "div",
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "src/app/dashboard/page.tsx:169:12",
                                "data-orchids-name": "span",
                                className: "text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(signal.live_price)
                            }, void 0, false, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/app/dashboard/page.tsx:172:12",
                                "data-orchids-name": "div",
                                className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this),
            (signal.stoploss !== undefined || signal.target !== undefined) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/app/dashboard/page.tsx:179:8",
                "data-orchids-name": "div",
                className: "grid grid-cols-2 gap-3 mb-4",
                children: [
                    signal.stoploss !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/dashboard/page.tsx:181:12",
                        "data-orchids-name": "div",
                        className: "p-2 rounded-lg bg-red-500/5 border border-red-500/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/app/dashboard/page.tsx:182:14",
                                "data-orchids-name": "p",
                                className: "text-xs text-muted-foreground mb-0.5",
                                children: "Stop Loss"
                            }, void 0, false, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                lineNumber: 182,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/app/dashboard/page.tsx:183:14",
                                "data-orchids-name": "p",
                                className: "text-sm font-semibold text-red-600",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(signal.stoploss)
                            }, void 0, false, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                        lineNumber: 181,
                        columnNumber: 13
                    }, this),
                    signal.target !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/dashboard/page.tsx:189:12",
                        "data-orchids-name": "div",
                        className: "p-2 rounded-lg bg-green-500/5 border border-green-500/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/app/dashboard/page.tsx:190:14",
                                "data-orchids-name": "p",
                                className: "text-xs text-muted-foreground mb-0.5",
                                children: "Target"
                            }, void 0, false, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                lineNumber: 190,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/app/dashboard/page.tsx:191:14",
                                "data-orchids-name": "p",
                                className: "text-sm font-semibold text-green-600",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(signal.target)
                            }, void 0, false, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                lineNumber: 191,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                        lineNumber: 189,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                lineNumber: 179,
                columnNumber: 9
            }, this),
            signal.entry_order && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/app/dashboard/page.tsx:201:8",
                "data-orchids-name": "div",
                className: "mb-4 p-3 rounded-lg bg-blue-500/5 border border-blue-500/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        "data-orchids-id": "src/app/dashboard/page.tsx:202:10",
                        "data-orchids-name": "p",
                        className: "text-xs text-muted-foreground mb-1",
                        children: "Entry Order"
                    }, void 0, false, {
                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/dashboard/page.tsx:203:10",
                        "data-orchids-name": "div",
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "src/app/dashboard/page.tsx:204:12",
                                "data-orchids-name": "span",
                                className: "text-sm font-medium",
                                children: signal.entry_order.status || 'Pending'
                            }, void 0, false, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            signal.entry_order.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "src/app/dashboard/page.tsx:208:14",
                                "data-orchids-name": "span",
                                className: "text-sm font-semibold text-blue-600",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(signal.entry_order.price)
                            }, void 0, false, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                lineNumber: 208,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                lineNumber: 201,
                columnNumber: 9
            }, this),
            signal.exit_order && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/app/dashboard/page.tsx:218:8",
                "data-orchids-name": "div",
                className: "mb-4 p-3 rounded-lg bg-green-500/5 border border-green-500/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        "data-orchids-id": "src/app/dashboard/page.tsx:219:10",
                        "data-orchids-name": "p",
                        className: "text-xs text-muted-foreground mb-1",
                        children: "Exit Order"
                    }, void 0, false, {
                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/dashboard/page.tsx:220:10",
                        "data-orchids-name": "div",
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "src/app/dashboard/page.tsx:221:12",
                                "data-orchids-name": "span",
                                className: "text-sm font-medium",
                                children: signal.exit_order.status || 'Pending'
                            }, void 0, false, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this),
                            signal.exit_order.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "src/app/dashboard/page.tsx:225:14",
                                "data-orchids-name": "span",
                                className: "text-sm font-semibold text-green-600",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(signal.exit_order.price)
                            }, void 0, false, {
                                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                                lineNumber: 225,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                lineNumber: 218,
                columnNumber: 9
            }, this),
            signal.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/app/dashboard/page.tsx:235:8",
                "data-orchids-name": "div",
                className: "mb-4 p-3 rounded-lg bg-red-500/5 border border-red-500/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    "data-orchids-id": "src/app/dashboard/page.tsx:236:10",
                    "data-orchids-name": "p",
                    className: "text-xs text-red-600",
                    children: signal.error
                }, void 0, false, {
                    fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                    lineNumber: 236,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "src/app/dashboard/page.tsx:241:6",
                "data-orchids-name": "Link",
                href: `/signals/${signal.signal_id}`,
                className: "flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                        "data-orchids-id": "src/app/dashboard/page.tsx:245:8",
                        "data-orchids-name": "Eye",
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    "View Details"
                ]
            }, void 0, true, {
                fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/dashboard/page.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__34028470._.js.map