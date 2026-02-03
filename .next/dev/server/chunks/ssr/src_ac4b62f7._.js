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
"[project]/src/app/dashboard/forum/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/forum/forum.module.css [app-ssr] (css module)"); // Reuse existing styles
"use client";
;
;
;
;
;
function PostDetailPage() {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const [post, setPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [newComment, setNewComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (id) {
            fetchPostData();
        }
    }, [
        id
    ]);
    const fetchPostData = async ()=>{
        setLoading(true);
        // 1. Fetch Post
        const { data: postData, error: postError } = await supabase.from('posts').select('*').eq('id', id).single();
        if (postError) {
            console.error("Error fetching post:", postError);
            alert("Post not found");
            router.push('/dashboard/forum');
            return;
        }
        setPost(postData);
        // 2. Fetch Comments
        const { data: commentsData } = await supabase.from('comments').select('*').eq('post_id', id).order('created_at', {
            ascending: true
        });
        if (commentsData) {
            setComments(commentsData);
        }
        setLoading(false);
    };
    const handlePostComment = async ()=>{
        const { data: { user } } = await supabase.auth.getUser();
        if (!user || !newComment.trim()) return;
        const { error } = await supabase.from('comments').insert({
            post_id: id,
            user_id: user.id,
            content: newComment
        });
        if (error) {
            alert("Error posting comment");
        } else {
            setNewComment("");
            fetchPostData(); // Refresh comments
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                padding: '2rem'
            },
            children: "Loading discussion..."
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
            lineNumber: 92,
            columnNumber: 59
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
        lineNumber: 92,
        columnNumber: 25
    }, this);
    if (!post) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        style: {
            flexDirection: 'column',
            maxWidth: '800px',
            margin: '0 auto',
            height: 'auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>router.back(),
                style: {
                    background: 'none',
                    border: 'none',
                    color: 'var(--secondary-foreground)',
                    cursor: 'pointer',
                    alignSelf: 'flex-start',
                    marginBottom: '-1rem'
                },
                children: "← Back to Forum"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                lineNumber: 99,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].postCard,
                style: {
                    cursor: 'default'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].postHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].postCategory,
                                children: post.category
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                lineNumber: 109,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '0.8rem',
                                    color: 'var(--secondary-foreground)'
                                },
                                children: new Date(post.created_at).toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                lineNumber: 110,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: '1.75rem',
                            fontWeight: 700,
                            margin: '1rem 0'
                        },
                        children: post.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                        lineNumber: 114,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            lineHeight: '1.6',
                            fontSize: '1.05rem',
                            whiteSpace: 'pre-wrap'
                        },
                        children: post.content
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                        lineNumber: 115,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                lineNumber: 107,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: '2rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            marginBottom: '1rem'
                        },
                        children: [
                            "Comments (",
                            comments.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                        lineNumber: 122,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            marginBottom: '2rem'
                        },
                        children: comments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: 'var(--secondary-foreground)',
                                fontStyle: 'italic'
                            },
                            children: "No comments yet. Be the first to reply!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                            lineNumber: 126,
                            columnNumber: 25
                        }, this) : comments.map((comment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '1rem',
                                    backgroundColor: 'var(--background)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '0.75rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: '0.5rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 600,
                                                    fontSize: '0.9rem'
                                                },
                                                children: "Student"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '0.75rem',
                                                    color: 'var(--secondary-foreground)'
                                                },
                                                children: new Date(comment.created_at).toLocaleString()
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: comment.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, comment.id, true, {
                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                lineNumber: 129,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                        lineNumber: 124,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textarea,
                                style: {
                                    minHeight: '100px'
                                },
                                placeholder: "Write a helpful reply...",
                                value: newComment,
                                onChange: (e)=>setNewComment(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                lineNumber: 149,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newPostBtn,
                                style: {
                                    width: 'fit-content',
                                    alignSelf: 'flex-end',
                                    padding: '0.75rem 2rem'
                                },
                                onClick: handlePostComment,
                                disabled: !newComment.trim(),
                                children: "Post Reply"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                lineNumber: 156,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                        lineNumber: 148,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                lineNumber: 121,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
        lineNumber: 96,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_ac4b62f7._.js.map