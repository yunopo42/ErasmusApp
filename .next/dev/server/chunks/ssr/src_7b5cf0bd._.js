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
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDate",
    ()=>formatDate,
    "timeAgo",
    ()=>timeAgo
]);
function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";
    return "just now";
}
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/forum/forum.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
// --- Helper Functions ---
const getAvatarUrl = (path)=>{
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    if (!path) return null;
    if (path.startsWith('http')) return path;
    return supabase.storage.from('avatars').getPublicUrl(path).data.publicUrl;
};
const renderAttachment = (url)=>{
    if (!url) return null;
    const isImage = url.match(/\.(jpeg|jpg|gif|png)$/) != null;
    if (isImage) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                marginTop: '1rem',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                maxWidth: '100%'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: url,
                alt: "Attachment",
                style: {
                    maxWidth: '100%',
                    display: 'block'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                lineNumber: 53,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
            lineNumber: 52,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginTop: '0.5rem'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: url,
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--accent)',
                borderRadius: '0.5rem',
                fontSize: '0.9rem',
                color: 'inherit',
                textDecoration: 'none'
            },
            children: "📎 Download Attachment"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
            lineNumber: 59,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
// --- Recursive Comment Component ---
// Defined OUTSIDE to prevent re-mounting on every render
const CommentItem = ({ comment, depth = 0, replyingTo, setReplyingTo, nestedReplyContent, setNestedReplyContent, nestedReplyFile, setNestedReplyFile, handlePostComment, uploadingComment })=>{
    const authorName = comment.profiles?.full_name || "Unknown";
    const avatarUrl = getAvatarUrl(comment.profiles?.avatar_url || null);
    const isReplying = replyingTo === comment.id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: '1rem',
            paddingLeft: depth > 0 ? '1rem' : '0',
            borderLeft: depth > 0 ? '2px solid var(--border)' : 'none',
            marginLeft: depth > 0 ? '0.5rem' : '0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: '1rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flexShrink: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: depth > 0 ? '24px' : '32px',
                                height: depth > 0 ? '24px' : '32px',
                                borderRadius: '50%',
                                backgroundColor: avatarUrl ? 'transparent' : '#64748b',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 600,
                                overflow: 'hidden',
                                fontSize: '0.85rem'
                            },
                            children: avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: avatarUrl,
                                alt: authorName,
                                style: {
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                lineNumber: 111,
                                columnNumber: 38
                            }, ("TURBOPACK compile-time value", void 0)) : authorName[0]
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                            lineNumber: 105,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                        lineNumber: 104,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    backgroundColor: 'var(--background)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '0 1rem 1rem 1rem',
                                    padding: '1rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: '0.5rem',
                                            alignItems: 'baseline'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 600,
                                                    fontSize: '0.9rem'
                                                },
                                                children: authorName
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '0.75rem',
                                                    color: 'var(--secondary-foreground)'
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeAgo"])(comment.created_at)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '0.95rem',
                                            lineHeight: '1.5'
                                        },
                                        children: comment.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    renderAttachment(comment.attachment_url),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setReplyingTo(isReplying ? null : comment.id);
                                            setNestedReplyContent("");
                                        },
                                        style: {
                                            background: 'none',
                                            border: 'none',
                                            color: 'var(--primary)',
                                            fontSize: '0.8rem',
                                            cursor: 'pointer',
                                            fontWeight: 500,
                                            marginTop: '0.5rem'
                                        },
                                        children: isReplying ? 'Cancel' : 'Reply'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                lineNumber: 117,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            isReplying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '0.8rem',
                                    padding: '0.8rem',
                                    backgroundColor: 'var(--background)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '0.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        dir: "ltr",
                                        spellCheck: false,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textarea,
                                        style: {
                                            minHeight: '80px',
                                            borderRadius: '0.5rem',
                                            padding: '0.8rem',
                                            fontSize: '0.95rem',
                                            width: '100%',
                                            textAlign: 'left'
                                        },
                                        placeholder: `Reply to ${authorName}...`,
                                        value: nestedReplyContent,
                                        onChange: (e)=>setNestedReplyContent(e.target.value),
                                        autoFocus: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginTop: '0.8rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            cursor: 'pointer',
                                                            fontSize: '0.85rem',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.4rem',
                                                            padding: '0.4rem 0.8rem',
                                                            backgroundColor: 'var(--secondary)',
                                                            borderRadius: '0.4rem',
                                                            color: 'var(--secondary-foreground)'
                                                        },
                                                        children: [
                                                            "📎 ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontWeight: 500
                                                                },
                                                                children: "Attach"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 44
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                style: {
                                                                    display: 'none'
                                                                },
                                                                onChange: (e)=>setNestedReplyFile(e.target.files ? e.target.files[0] : null)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    nestedReplyFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '0.75rem',
                                                            color: 'var(--primary)',
                                                            maxWidth: '150px',
                                                            overflow: 'hidden',
                                                            whiteSpace: 'nowrap',
                                                            textOverflow: 'ellipsis'
                                                        },
                                                        children: nestedReplyFile.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 57
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                                lineNumber: 162,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: '0.5rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setReplyingTo(null),
                                                        style: {
                                                            padding: '0.5rem 1rem',
                                                            fontSize: '0.85rem',
                                                            background: 'transparent',
                                                            border: '1px solid var(--border)',
                                                            borderRadius: '0.4rem',
                                                            cursor: 'pointer',
                                                            color: 'var(--foreground)'
                                                        },
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newPostBtn,
                                                        style: {
                                                            padding: '0.5rem 1.2rem',
                                                            fontSize: '0.85rem'
                                                        },
                                                        onClick: ()=>handlePostComment(comment.id),
                                                        disabled: uploadingComment,
                                                        children: uploadingComment ? 'Sending...' : 'Reply'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                lineNumber: 146,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                        lineNumber: 116,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                lineNumber: 102,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            comment.replies && comment.replies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: '1rem'
                },
                children: comment.replies.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentItem, {
                        comment: child,
                        depth: depth + 1,
                        replyingTo: replyingTo,
                        setReplyingTo: setReplyingTo,
                        nestedReplyContent: nestedReplyContent,
                        setNestedReplyContent: setNestedReplyContent,
                        nestedReplyFile: nestedReplyFile,
                        setNestedReplyFile: setNestedReplyFile,
                        handlePostComment: handlePostComment,
                        uploadingComment: uploadingComment
                    }, child.id, false, {
                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                        lineNumber: 203,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                lineNumber: 201,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
        lineNumber: 96,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
function PostDetailPage() {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const [post, setPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Main Reply State
    const [newComment, setNewComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [commentFile, setCommentFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadingComment, setUploadingComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Nested Reply State
    const [replyingTo, setReplyingTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [nestedReplyContent, setNestedReplyContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [nestedReplyFile, setNestedReplyFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (id) {
            fetchPostData();
        }
    }, [
        id
    ]);
    const fetchPostData = async ()=>{
        setLoading(true);
        const { data: postData, error: postError } = await supabase.from('posts').select('*').eq('id', id).single();
        if (postError) {
            console.error("Error fetching post:", postError);
            router.push('/dashboard/forum');
            return;
        }
        const { data: commentsData } = await supabase.from('comments').select('*').eq('post_id', id).order('created_at', {
            ascending: true
        });
        const userIds = new Set();
        if (postData.user_id) userIds.add(postData.user_id);
        commentsData?.forEach((c)=>c.user_id && userIds.add(c.user_id));
        const { data: profilesData } = await supabase.from('profiles').select('id, full_name, avatar_url').in('id', Array.from(userIds));
        const postAuthor = profilesData?.find((p)=>p.id === postData.user_id);
        const mergedPost = {
            ...postData,
            profiles: postAuthor ? {
                full_name: postAuthor.full_name,
                avatar_url: postAuthor.avatar_url
            } : null
        };
        const mergedComments = commentsData?.map((comment)=>{
            const author = profilesData?.find((p)=>p.id === comment.user_id);
            return {
                ...comment,
                profiles: author ? {
                    full_name: author.full_name,
                    avatar_url: author.avatar_url
                } : null,
                replies: []
            };
        }) || [];
        // Build Tree
        const commentMap = {};
        const rootComments = [];
        mergedComments.forEach((c)=>commentMap[c.id] = c);
        mergedComments.forEach((c)=>{
            if (c.parent_id && commentMap[c.parent_id]) {
                commentMap[c.parent_id].replies.push(c);
            } else {
                rootComments.push(c);
            }
        });
        setPost(mergedPost);
        setComments(rootComments);
        setLoading(false);
    };
    const handleFileUpload = async (file)=>{
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;
        const { error: uploadError } = await supabase.storage.from('forum_uploads').upload(filePath, file);
        if (uploadError) throw uploadError;
        const { data } = supabase.storage.from('forum_uploads').getPublicUrl(filePath);
        return data.publicUrl;
    };
    const handlePostComment = async (parentId = null)=>{
        const { data: { user } } = await supabase.auth.getUser();
        const content = parentId ? nestedReplyContent : newComment;
        const file = parentId ? nestedReplyFile : commentFile;
        if (!user || !content.trim()) return;
        try {
            setUploadingComment(true);
            let attachmentUrl = null;
            if (file) {
                attachmentUrl = await handleFileUpload(file);
            }
            const { error } = await supabase.from('comments').insert({
                post_id: id,
                user_id: user.id,
                content: content,
                attachment_url: attachmentUrl,
                parent_id: parentId
            });
            if (error) throw error;
            if (parentId) {
                setNestedReplyContent("");
                setNestedReplyFile(null);
                setReplyingTo(null);
            } else {
                setNewComment("");
                setCommentFile(null);
            }
            fetchPostData();
        } catch (error) {
            alert("Error posting comment: " + error.message);
        } finally{
            setUploadingComment(false);
        }
    };
    // ... renderAttachment & getAvatarUrl moved OUTSIDE ...
    const postAuthor = post?.profiles?.full_name || "Unknown Student";
    // getAvatarUrl defined outside but uses supabase client, let's fix that in next step if generic one fails, but current one uses new client inside.
    const getPageAvatarUrl = (path)=>{
        if (!path) return null;
        if (path.startsWith('http')) return path;
        return supabase.storage.from('avatars').getPublicUrl(path).data.publicUrl;
    };
    const postAvatar = getPageAvatarUrl(post?.profiles?.avatar_url || null);
    const postInitial = postAuthor.charAt(0);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '2rem'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading discussion..."
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                lineNumber: 386,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
            lineNumber: 385,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
        lineNumber: 384,
        columnNumber: 9
    }, this);
    if (!post) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        style: {
            flexDirection: 'column',
            maxWidth: '800px',
            margin: '0 auto',
            height: 'auto',
            paddingBottom: '4rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/dashboard/forum",
                style: {
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    color: 'var(--secondary-foreground)',
                    marginBottom: '1.5rem',
                    fontSize: '0.9rem',
                    fontWeight: 500
                },
                children: "← Back to Forum"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                lineNumber: 397,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].postCard,
                style: {
                    cursor: 'default',
                    border: '1px solid var(--border)',
                    boxShadow: 'none'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            marginBottom: '1rem'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: postAvatar ? 'transparent' : 'var(--primary)',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 600,
                                        overflow: 'hidden',
                                        fontSize: '1.1rem'
                                    },
                                    children: postAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: postAvatar,
                                        alt: postAuthor,
                                        style: {
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                        lineNumber: 418,
                                        columnNumber: 43
                                    }, this) : postInitial
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                    lineNumber: 412,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontWeight: 600,
                                                fontSize: '0.95rem'
                                            },
                                            children: postAuthor
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                            lineNumber: 421,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '0.8rem',
                                                color: 'var(--secondary-foreground)'
                                            },
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeAgo"])(post.created_at),
                                                " • ",
                                                post.category
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                            lineNumber: 422,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                    lineNumber: 420,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                            lineNumber: 411,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                        lineNumber: 410,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            margin: '0.5rem 0 1rem 0',
                            lineHeight: 1.3
                        },
                        children: post.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                        lineNumber: 429,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            lineHeight: '1.7',
                            fontSize: '1rem',
                            whiteSpace: 'pre-wrap',
                            color: 'var(--foreground)'
                        },
                        children: [
                            post.content,
                            renderAttachment(post.attachment_url)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                        lineNumber: 430,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                lineNumber: 409,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: '2.5rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '1.5rem',
                            color: 'var(--secondary-foreground)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    color: 'var(--foreground)'
                                },
                                children: "Discussion"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                lineNumber: 439,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '0.9rem',
                                    backgroundColor: 'var(--secondary)',
                                    padding: '0.1rem 0.5rem',
                                    borderRadius: '1rem'
                                },
                                children: comments.length
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                lineNumber: 440,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                        lineNumber: 438,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '1rem',
                            alignItems: 'flex-start',
                            marginBottom: '2rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--primary)',
                                    opacity: 0.5,
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                lineNumber: 447,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        dir: "ltr",
                                        spellCheck: false,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textarea,
                                        style: {
                                            minHeight: '100px',
                                            resize: 'vertical',
                                            border: '1px solid var(--border)',
                                            borderRadius: '0.75rem',
                                            padding: '1rem',
                                            fontSize: '0.95rem',
                                            textAlign: 'left'
                                        },
                                        placeholder: "Write a helpful reply...",
                                        value: newComment,
                                        onChange: (e)=>setNewComment(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                        lineNumber: 453,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '0.5rem 1rem',
                                            borderTop: '1px solid var(--border)',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            backgroundColor: 'var(--background-light)',
                                            borderRadius: '0.75rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "comment-file",
                                                        style: {
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.3rem',
                                                            fontSize: '0.9rem',
                                                            padding: '0.3rem 0.5rem',
                                                            borderRadius: '0.3rem',
                                                            backgroundColor: 'var(--background)'
                                                        },
                                                        children: [
                                                            "📎 ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: 'var(--secondary-foreground)'
                                                                },
                                                                children: commentFile ? commentFile.name : 'Attach file'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                                                lineNumber: 472,
                                                                columnNumber: 40
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "comment-file",
                                                        type: "file",
                                                        onChange: (e)=>setCommentFile(e.target.files ? e.target.files[0] : null),
                                                        style: {
                                                            display: 'none'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                                        lineNumber: 474,
                                                        columnNumber: 33
                                                    }, this),
                                                    commentFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCommentFile(null),
                                                        style: {
                                                            background: 'none',
                                                            border: 'none',
                                                            color: '#ef4444',
                                                            cursor: 'pointer'
                                                        },
                                                        children: "✕"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                                lineNumber: 470,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newPostBtn,
                                                style: {
                                                    width: 'fit-content',
                                                    padding: '0.6rem 1.5rem',
                                                    fontSize: '0.9rem',
                                                    opacity: uploadingComment || !newComment.trim() && !commentFile ? 0.6 : 1,
                                                    cursor: uploadingComment || !newComment.trim() && !commentFile ? 'not-allowed' : 'pointer'
                                                },
                                                onClick: ()=>handlePostComment(null),
                                                disabled: uploadingComment || !newComment.trim() && !commentFile,
                                                children: uploadingComment ? 'Sending...' : 'Post Reply'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                                lineNumber: 485,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                        lineNumber: 469,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                lineNumber: 452,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                        lineNumber: 446,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem'
                        },
                        children: comments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '3rem',
                                textAlign: 'center',
                                backgroundColor: 'var(--secondary)',
                                borderRadius: '1rem',
                                border: '1px dashed var(--border)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'var(--secondary-foreground)'
                                },
                                children: "No comments yet. Be the first to start the discussion! 🚀"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                lineNumber: 509,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                            lineNumber: 504,
                            columnNumber: 25
                        }, this) : comments.map((comment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentItem, {
                                comment: comment,
                                replyingTo: replyingTo,
                                setReplyingTo: setReplyingTo,
                                nestedReplyContent: nestedReplyContent,
                                setNestedReplyContent: setNestedReplyContent,
                                nestedReplyFile: nestedReplyFile,
                                setNestedReplyFile: setNestedReplyFile,
                                handlePostComment: handlePostComment,
                                uploadingComment: uploadingComment
                            }, comment.id, false, {
                                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                                lineNumber: 513,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                        lineNumber: 502,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
                lineNumber: 437,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/forum/[id]/page.tsx",
        lineNumber: 394,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_7b5cf0bd._.js.map