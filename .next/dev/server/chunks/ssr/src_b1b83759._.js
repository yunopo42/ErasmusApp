module.exports = [
"[project]/src/lib/supabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-ssr] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://knjyuteaxtmnivbxrnbi.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtuanl1dGVheHRtbml2YnhybmJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5NTQ4MzAsImV4cCI6MjA4NTUzMDgzMH0.PvqP8QMCLe9_pKJb9M6WEWfEF3B4LcVTgu2O-d2uMdo"));
}
}),
"[project]/src/app/dashboard/opportunities/opportunities.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "applyBtn": "opportunities-module__Vr-zxa__applyBtn",
  "badge": "opportunities-module__Vr-zxa__badge",
  "card": "opportunities-module__Vr-zxa__card",
  "cardHeader": "opportunities-module__Vr-zxa__cardHeader",
  "cardOrg": "opportunities-module__Vr-zxa__cardOrg",
  "cardTitle": "opportunities-module__Vr-zxa__cardTitle",
  "container": "opportunities-module__Vr-zxa__container",
  "grid": "opportunities-module__Vr-zxa__grid",
  "logoPlaceholder": "opportunities-module__Vr-zxa__logoPlaceholder",
  "metaGrid": "opportunities-module__Vr-zxa__metaGrid",
  "metaItem": "opportunities-module__Vr-zxa__metaItem",
  "sectionHeader": "opportunities-module__Vr-zxa__sectionHeader",
  "title": "opportunities-module__Vr-zxa__title",
  "toolCard": "opportunities-module__Vr-zxa__toolCard",
  "toolDesc": "opportunities-module__Vr-zxa__toolDesc",
  "toolIcon": "opportunities-module__Vr-zxa__toolIcon",
  "toolTitle": "opportunities-module__Vr-zxa__toolTitle",
  "toolsGrid": "opportunities-module__Vr-zxa__toolsGrid",
  "type_discount": "opportunities-module__Vr-zxa__type_discount",
  "type_internship": "opportunities-module__Vr-zxa__type_internship",
  "type_project": "opportunities-module__Vr-zxa__type_project",
});
}),
"[project]/src/app/dashboard/opportunities/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OpportunitiesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/opportunities/opportunities.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
function OpportunitiesPage() {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const [opportunities, setOpportunities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [userProfile, setUserProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchData();
    }, []);
    const fetchData = async ()=>{
        // 1. Fetch User Profile for personalized links
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();
            setUserProfile(profile);
        }
        // 2. Fetch Featured Opportunities
        const { data: opps } = await supabase.from('opportunities').select('*').order('created_at', {
            ascending: false
        });
        if (opps) setOpportunities(opps);
        setLoading(false);
    };
    // Helper to generate search links
    const getErasmusInternLink = ()=>"https://erasmusintern.org/traineeships";
    const getESCLink = ()=>"https://youth.europa.eu/solidarity/placement/search_en";
    const getUniversityLink = ()=>{
        if (!userProfile?.university) return "https://www.google.com/search?q=erasmus+partner+universities";
        return `https://www.google.com/search?q=${encodeURIComponent(userProfile.university + " erasmus partner universities agreement list")}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionHeader,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: "🚀 Smart Search"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toolsGrid,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: getErasmusInternLink(),
                                target: "_blank",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toolCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toolIcon,
                                        children: "💼"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toolTitle,
                                        children: "Find Internships"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toolDesc,
                                        children: "Search 10,000+ offers on ErasmusIntern.org"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: getESCLink(),
                                target: "_blank",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toolCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toolIcon,
                                        children: "🤝"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toolTitle,
                                        children: "Volunteering (ESC)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toolDesc,
                                        children: "Join social projects across Europe funded by EU."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                lineNumber: 74,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: getUniversityLink(),
                                target: "_blank",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toolCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toolIcon,
                                        children: "🎓"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toolTitle,
                                        children: "My University Agreements"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toolDesc,
                                        children: userProfile?.university ? `See where students from ${userProfile.university} can go.` : "Find your university's partner list."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionHeader,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: "✨ Featured Picks"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                            lineNumber: 95,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Loading opportunities..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                        lineNumber: 100,
                        columnNumber: 21
                    }, this) : opportunities.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            padding: '3rem',
                            border: '1px dashed var(--border)',
                            borderRadius: '1rem',
                            color: 'var(--secondary-foreground)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "No featured opportunities yet."
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                lineNumber: 103,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: 'Check "Smart Search" above to find thousands of listings!'
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                lineNumber: 104,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                        lineNumber: 102,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
                        children: opportunities.map((opp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoPlaceholder,
                                                children: opp.type === 'internship' ? '💼' : opp.type === 'project' ? '🌍' : '🏷️'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][`type_${opp.type}`]}`,
                                                children: opp.type
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                                                children: opp.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardOrg,
                                                children: opp.organization
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metaGrid,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metaItem,
                                                children: [
                                                    "📍 ",
                                                    opp.location
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 37
                                            }, this),
                                            opp.salary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metaItem,
                                                children: [
                                                    "💰 ",
                                                    opp.salary
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 52
                                            }, this),
                                            opp.deadline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metaItem,
                                                children: [
                                                    "📅 ",
                                                    new Date(opp.deadline).toLocaleDateString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 54
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: opp.application_url,
                                        target: "_blank",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$opportunities$2f$opportunities$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].applyBtn,
                                        children: "Apply Now ↗"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, opp.id, true, {
                                fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                                lineNumber: 109,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                        lineNumber: 107,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/opportunities/page.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_b1b83759._.js.map