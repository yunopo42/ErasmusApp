module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/dashboard/dashboard.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionBtn": "dashboard-module__XABe8G__actionBtn",
  "avatar": "dashboard-module__XABe8G__avatar",
  "brand": "dashboard-module__XABe8G__brand",
  "content": "dashboard-module__XABe8G__content",
  "layout": "dashboard-module__XABe8G__layout",
  "main": "dashboard-module__XABe8G__main",
  "nav": "dashboard-module__XABe8G__nav",
  "navItem": "dashboard-module__XABe8G__navItem",
  "navItemActive": "dashboard-module__XABe8G__navItemActive",
  "pageTitle": "dashboard-module__XABe8G__pageTitle",
  "sidebar": "dashboard-module__XABe8G__sidebar",
  "sidebarHeader": "dashboard-module__XABe8G__sidebarHeader",
  "sidebarOpen": "dashboard-module__XABe8G__sidebarOpen",
  "topbar": "dashboard-module__XABe8G__topbar",
  "topbarActions": "dashboard-module__XABe8G__topbarActions",
  "userInfo": "dashboard-module__XABe8G__userInfo",
  "userName": "dashboard-module__XABe8G__userName",
  "userPlan": "dashboard-module__XABe8G__userPlan",
  "userProfile": "dashboard-module__XABe8G__userProfile",
});
}),
"[project]/src/app/dashboard/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/dashboard.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// Icons (Simple SVGs for now to adhere to Vanilla request, 
// usually we'd use lucide-react but I'll embed to avoid dep issues for now 
// or I can install lucide-react if preferred. I'll use text emojis/simple svgs for speed)
const MENU_ITEMS = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: "📊"
    },
    {
        name: "Opportunities",
        href: "/dashboard/opportunities",
        icon: "🌍"
    },
    {
        name: "Visa & Checklist",
        href: "/dashboard/visa",
        icon: "📝"
    },
    {
        name: "Documents",
        href: "/dashboard/documents",
        icon: "📂"
    },
    {
        name: "Budget",
        href: "/dashboard/budget",
        icon: "💰"
    },
    {
        name: "Calendar",
        href: "/dashboard/calendar",
        icon: "📅"
    },
    {
        name: "Travel Passport",
        href: "/dashboard/passport",
        icon: "🏕️"
    },
    {
        name: "Forum",
        href: "/dashboard/forum",
        icon: "💬"
    },
    {
        name: "Settings",
        href: "/dashboard/settings",
        icon: "⚙️"
    }
];
function DashboardLayout({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].layout,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebar} ${isSidebarOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebarOpen : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebarHeader,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].brand,
                            children: "ErasmusHub"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/layout.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/layout.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nav,
                        children: MENU_ITEMS.map((item)=>{
                            const isActive = pathname === item.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navItem} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navItemActive : ''}`,
                                onClick: ()=>setIsSidebarOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '1.2rem'
                                        },
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/layout.tsx",
                                        lineNumber: 50,
                                        columnNumber: 33
                                    }, this),
                                    item.name
                                ]
                            }, item.href, true, {
                                fileName: "[project]/src/app/dashboard/layout.tsx",
                                lineNumber: 44,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/layout.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userProfile,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatar,
                                children: "JD"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/layout.tsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userName,
                                        children: "John Doe"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/layout.tsx",
                                        lineNumber: 60,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userPlan,
                                        children: "Free Plan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/layout.tsx",
                                        lineNumber: 61,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/layout.tsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/layout.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/layout.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topbar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageTitle,
                                children: MENU_ITEMS.find((i)=>i.href === pathname)?.name || "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/layout.tsx",
                                lineNumber: 69,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topbarActions,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionBtn,
                                        title: "Notifications",
                                        children: "🔔"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/layout.tsx",
                                        lineNumber: 73,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionBtn,
                                        style: {
                                            display: 'md:none'
                                        },
                                        onClick: ()=>setIsSidebarOpen(!isSidebarOpen),
                                        children: "☰"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/layout.tsx",
                                        lineNumber: 75,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/layout.tsx",
                                lineNumber: 72,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/layout.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/layout.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/layout.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/layout.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0dfdf3ba._.js.map