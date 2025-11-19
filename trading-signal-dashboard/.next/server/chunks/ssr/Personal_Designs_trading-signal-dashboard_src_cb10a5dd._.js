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
"[project]/Personal_Designs/trading-signal-dashboard/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Personal_Designs/trading-signal-dashboard/src/components/ui/loader.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Home() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        router.push('/dashboard');
    }, [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/app/page.tsx:15:4",
        "data-orchids-name": "div",
        className: "flex items-center justify-center min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Personal_Designs$2f$trading$2d$signal$2d$dashboard$2f$src$2f$components$2f$ui$2f$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Loader"], {
            size: "lg"
        }, void 0, false, {
            fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/page.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Personal_Designs/trading-signal-dashboard/src/app/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=Personal_Designs_trading-signal-dashboard_src_cb10a5dd._.js.map