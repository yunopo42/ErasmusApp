module.exports = [
"[project]/src/app/dashboard/forum/forum.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "forum-module__JYxm8W__container",
  "feed": "forum-module__JYxm8W__feed",
  "filterBtn": "forum-module__JYxm8W__filterBtn",
  "filterBtnActive": "forum-module__JYxm8W__filterBtnActive",
  "filterGroup": "forum-module__JYxm8W__filterGroup",
  "filterTitle": "forum-module__JYxm8W__filterTitle",
  "input": "forum-module__JYxm8W__input",
  "newPostBtn": "forum-module__JYxm8W__newPostBtn",
  "postCard": "forum-module__JYxm8W__postCard",
  "postCategory": "forum-module__JYxm8W__postCategory",
  "postHeader": "forum-module__JYxm8W__postHeader",
  "postMeta": "forum-module__JYxm8W__postMeta",
  "postPreview": "forum-module__JYxm8W__postPreview",
  "postTitle": "forum-module__JYxm8W__postTitle",
  "select": "forum-module__JYxm8W__select",
  "sidebar": "forum-module__JYxm8W__sidebar",
  "textarea": "forum-module__JYxm8W__textarea",
});
}),
"[project]/src/components/onboarding/onboarding.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backBtn": "onboarding-module__S7pKPG__backBtn",
  "content": "onboarding-module__S7pKPG__content",
  "dot": "onboarding-module__S7pKPG__dot",
  "dotActive": "onboarding-module__S7pKPG__dotActive",
  "flag": "onboarding-module__S7pKPG__flag",
  "footer": "onboarding-module__S7pKPG__footer",
  "formGroup": "onboarding-module__S7pKPG__formGroup",
  "grid": "onboarding-module__S7pKPG__grid",
  "input": "onboarding-module__S7pKPG__input",
  "label": "onboarding-module__S7pKPG__label",
  "modal": "onboarding-module__S7pKPG__modal",
  "nextBtn": "onboarding-module__S7pKPG__nextBtn",
  "optionCard": "onboarding-module__S7pKPG__optionCard",
  "optionCardSelected": "onboarding-module__S7pKPG__optionCardSelected",
  "optionTitle": "onboarding-module__S7pKPG__optionTitle",
  "overlay": "onboarding-module__S7pKPG__overlay",
  "slideUp": "onboarding-module__S7pKPG__slideUp",
  "stepIndicator": "onboarding-module__S7pKPG__stepIndicator",
  "subtitle": "onboarding-module__S7pKPG__subtitle",
  "title": "onboarding-module__S7pKPG__title",
});
}),
"[project]/src/app/dashboard/forum/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ForumPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/forum/forum.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/onboarding.module.css [app-ssr] (css module)"); // Reuse modal
"use client";
;
;
;
;
;
;
// ... in fetchPosts ...
// Removed incorrect comments
// Removed incorrect comments
const CATEGORIES = [
    "All",
    "General",
    "Accommodation",
    "Visa",
    "Nightlife",
    "Travel"
];
function ForumPage() {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // New Post Modal
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newPost, setNewPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        content: '',
        category: 'General'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchPosts();
    }, [
        activeCategory
    ]);
    const fetchPosts = async ()=>{
        setLoading(true);
        let query = supabase.from('posts').select('*, comments(count)').order('created_at', {
            ascending: false
        });
        if (activeCategory !== "All") {
            query = query.eq('category', activeCategory);
        }
        const { data, error } = await query;
        if (data) setPosts(data);
        setLoading(false);
    };
    const handleCreatePost = async ()=>{
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        if (!newPost.title || !newPost.content) return;
        const { error } = await supabase.from('posts').insert({
            user_id: user.id,
            title: newPost.title,
            content: newPost.content,
            category: newPost.category
        });
        if (error) {
            alert("Error posting: " + error.message);
        } else {
            setIsModalOpen(false);
            setNewPost({
                title: '',
                content: '',
                category: 'General'
            });
            fetchPosts();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newPostBtn,
                        onClick: ()=>setIsModalOpen(true),
                        children: "✍️ Ask a Question"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/forum/page.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterTitle,
                                children: "Topics"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                lineNumber: 92,
                                columnNumber: 21
                            }, this),
                            CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterBtn} ${activeCategory === cat ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterBtnActive : ''}`,
                                    onClick: ()=>setActiveCategory(cat),
                                    children: cat === "All" ? "🔥 Trending" : `# ${cat}`
                                }, cat, false, {
                                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/forum/page.tsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].feed,
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        padding: '2rem',
                        textAlign: 'center'
                    },
                    children: "Loading discussions..."
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                    lineNumber: 108,
                    columnNumber: 21
                }, this) : posts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        padding: '3rem',
                        border: '1px dashed var(--border)',
                        borderRadius: '1rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "No discussions yet 🦗"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                            lineNumber: 111,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: 'var(--secondary-foreground)'
                            },
                            children: "Be the first to ask a question in this category!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                            lineNumber: 112,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                    lineNumber: 110,
                    columnNumber: 21
                }, this) : posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/dashboard/forum/${post.id}`,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].postCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].postHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].postCategory,
                                        children: post.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '0.8rem',
                                            color: 'var(--secondary-foreground)'
                                        },
                                        children: new Date(post.created_at).toLocaleDateString()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                lineNumber: 117,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].postTitle,
                                children: post.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                lineNumber: 123,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].postPreview,
                                children: post.content
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                lineNumber: 124,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].postMeta,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "👤 Student"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "💬 ",
                                            post.comments && post.comments[0] ? post.comments[0].count : 0,
                                            " comments"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "❤️ ",
                                            post.likes_count
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                lineNumber: 125,
                                columnNumber: 29
                            }, this)
                        ]
                    }, post.id, true, {
                        fileName: "[project]/src/app/dashboard/forum/page.tsx",
                        lineNumber: 116,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                lineNumber: 106,
                columnNumber: 13
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overlay,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modal,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '1.5rem',
                                borderBottom: '1px solid var(--border)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '1.25rem'
                                },
                                children: "Ask the Community"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                lineNumber: 140,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                            lineNumber: 139,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                marginBottom: '0.5rem',
                                                fontWeight: 500
                                            },
                                            children: "Title"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                            lineNumber: 144,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                                            placeholder: "e.g. How to find accommodation in Warsaw?",
                                            value: newPost.title,
                                            onChange: (e)=>setNewPost({
                                                    ...newPost,
                                                    title: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                            lineNumber: 145,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                marginBottom: '0.5rem',
                                                fontWeight: 500
                                            },
                                            children: "Category"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].select,
                                            value: newPost.category,
                                            onChange: (e)=>setNewPost({
                                                    ...newPost,
                                                    category: e.target.value
                                                }),
                                            children: CATEGORIES.filter((c)=>c !== "All").map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: c,
                                                    children: c
                                                }, c, false, {
                                                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                marginBottom: '0.5rem',
                                                fontWeight: 500
                                            },
                                            children: "Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textarea,
                                            placeholder: "Describe your question in detail...",
                                            value: newPost.content,
                                            onChange: (e)=>setNewPost({
                                                    ...newPost,
                                                    content: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                            lineNumber: 168,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '1rem',
                                        marginTop: '1rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backBtn,
                                            onClick: ()=>setIsModalOpen(false),
                                            style: {
                                                flex: 1,
                                                border: '1px solid var(--border)'
                                            },
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nextBtn,
                                            onClick: handleCreatePost,
                                            style: {
                                                flex: 1
                                            },
                                            children: "Post Question"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                            lineNumber: 142,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                    lineNumber: 138,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                lineNumber: 137,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/forum/page.tsx",
        lineNumber: 84,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_702ea707._.js.map