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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/onboarding.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
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
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [likedPosts, setLikedPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // Track liked posts (backwards compatibility)
    // New Post Modal & Upload State
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newPost, setNewPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        content: '',
        category: 'General'
    });
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchPosts();
    }, [
        activeCategory
    ]);
    const handleFileUpload = async (file)=>{
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;
        const { error: uploadError } = await supabase.storage.from('forum_uploads') // Using the new bucket
        .upload(filePath, file);
        if (uploadError) {
            throw uploadError;
        }
        const { data } = supabase.storage.from('forum_uploads').getPublicUrl(filePath);
        return data.publicUrl;
    };
    const fetchPosts = async ()=>{
        setLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        // 1. Fetch Posts with Likes Count and "Am I Liked?" check
        let query = supabase.from('posts').select(`
                *,
                comments (count),
                post_likes (user_id)
            `).order('created_at', {
            ascending: false
        });
        if (activeCategory !== "All") {
            query = query.eq('category', activeCategory);
        }
        const { data: postsData, error: postsError } = await query;
        if (postsError) {
            console.error("Error fetching posts:", postsError);
            setLoading(false);
            return;
        }
        if (!postsData || postsData.length === 0) {
            setPosts([]);
            setLoading(false);
            return;
        }
        // 2. Fetch Profiles manualy
        const userIds = Array.from(new Set(postsData.map((p)=>p.user_id)));
        const { data: profilesData } = await supabase.from('profiles').select('id, full_name, avatar_url').in('id', userIds);
        // 3. Merge Data & Calculate Likes
        const mergedPosts = postsData.map((post)=>{
            const author = profilesData?.find((p)=>p.id === post.user_id);
            const likes = post.post_likes || []; // Array of likes
            const isLikedByMe = user ? likes.some((l)=>l.user_id === user.id) : false;
            return {
                ...post,
                likes_count: likes.length,
                is_liked: isLikedByMe,
                profiles: author ? {
                    full_name: author.full_name,
                    avatar_url: author.avatar_url
                } : null
            };
        });
        setPosts(mergedPosts);
        setLoading(false);
    };
    const handleCreatePost = async ()=>{
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        if (!newPost.title || !newPost.content) return;
        try {
            setUploading(true);
            let attachmentUrl = null;
            if (selectedFile) {
                attachmentUrl = await handleFileUpload(selectedFile);
            }
            const { error } = await supabase.from('posts').insert({
                user_id: user.id,
                title: newPost.title,
                content: newPost.content,
                category: newPost.category,
                attachment_url: attachmentUrl
            });
            if (error) throw error;
            setIsModalOpen(false);
            setNewPost({
                title: '',
                content: '',
                category: 'General'
            });
            setSelectedFile(null);
            fetchPosts();
        } catch (error) {
            alert("Error posting: " + error.message);
        } finally{
            setUploading(false);
        }
    };
    const handleLike = async (e, postId, isLiked)=>{
        e.preventDefault();
        e.stopPropagation();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        // Optimistic Update
        setPosts((prev)=>prev.map((p)=>{
                if (p.id === postId) {
                    return {
                        ...p,
                        likes_count: isLiked ? p.likes_count - 1 : p.likes_count + 1,
                        is_liked: !isLiked // Toggle state (defined in merged types below)
                    };
                }
                return p;
            }));
        if (isLiked) {
            // Unlike (Delete)
            const { error } = await supabase.from('post_likes').delete().eq('post_id', postId).eq('user_id', user.id);
            if (error) console.error(error);
        } else {
            // Like (Insert)
            const { error } = await supabase.from('post_likes').insert({
                post_id: postId,
                user_id: user.id
            });
            if (error) console.error(error);
        }
    // Background refresh to sync perfectly
    // fetchPosts(); 
    };
    // Filter by Search Term locally
    const filteredPosts = posts.filter((post)=>post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.content.toLowerCase().includes(searchTerm.toLowerCase()));
    const getAvatarUrl = (path)=>{
        if (!path) return null;
        if (path.startsWith('http')) return path;
        return supabase.storage.from('avatars').getPublicUrl(path).data.publicUrl;
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
                        lineNumber: 221,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '0 0 1rem 0'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "🔍 Search topics...",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                                    style: {
                                        fontSize: '0.9rem',
                                        padding: '0.6rem'
                                    },
                                    value: searchTerm,
                                    onChange: (e)=>setSearchTerm(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                    lineNumber: 228,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                lineNumber: 227,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterTitle,
                                children: "Topics"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                lineNumber: 238,
                                columnNumber: 21
                            }, this),
                            CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterBtn} ${activeCategory === cat ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterBtnActive : ''}`,
                                    onClick: ()=>setActiveCategory(cat),
                                    children: cat === "All" ? "🔥 Trending" : `# ${cat}`
                                }, cat, false, {
                                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/forum/page.tsx",
                        lineNumber: 225,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                lineNumber: 220,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].feed,
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '3rem'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spinner"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/forum/page.tsx",
                        lineNumber: 255,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                    lineNumber: 254,
                    columnNumber: 21
                }, this) : filteredPosts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        padding: '3rem',
                        border: '1px dashed var(--border)',
                        borderRadius: '1rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "No discussions found 🦗"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                            lineNumber: 259,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: 'var(--secondary-foreground)'
                            },
                            children: "Try a different search or category."
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                            lineNumber: 260,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                    lineNumber: 258,
                    columnNumber: 21
                }, this) : filteredPosts.map((post)=>{
                    const authorName = post.profiles?.full_name || "Unknown Student";
                    const authorAvatar = getAvatarUrl(post.profiles?.avatar_url || null);
                    const authorInitial = authorName.charAt(0);
                    const isLiked = post.is_liked || false; // Use real DB check
                    // Helper to detect file type for icon
                    const hasAttachment = !!post.attachment_url;
                    const isImage = hasAttachment && post.attachment_url?.match(/\.(jpeg|jpg|gif|png)$/) != null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/dashboard/forum/${post.id}`,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].postCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].postHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '24px',
                                                    height: '24px',
                                                    borderRadius: '50%',
                                                    backgroundColor: authorAvatar ? 'transparent' : 'var(--primary)',
                                                    color: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 600,
                                                    overflow: 'hidden',
                                                    fontSize: '0.75rem'
                                                },
                                                children: authorAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: authorAvatar,
                                                    alt: authorName,
                                                    style: {
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 61
                                                }, this) : authorInitial
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                                lineNumber: 277,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '0.85rem',
                                                    fontWeight: 500
                                                },
                                                children: authorName
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '0.8rem',
                                                    color: 'var(--secondary-foreground)'
                                                },
                                                children: [
                                                    "• ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeAgo"])(post.created_at)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                                lineNumber: 286,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].postCategory,
                                        children: post.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                        lineNumber: 288,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                lineNumber: 275,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].postTitle,
                                children: post.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                lineNumber: 290,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    gap: '1rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].postPreview,
                                        children: post.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                        lineNumber: 294,
                                        columnNumber: 37
                                    }, this),
                                    hasAttachment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            backgroundColor: 'var(--accent)',
                                            padding: '0.3rem 0.6rem',
                                            borderRadius: '0.5rem',
                                            fontSize: '0.75rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.3rem',
                                            whiteSpace: 'nowrap',
                                            border: '1px solid var(--border)'
                                        },
                                        children: isImage ? '📷 Image' : '📎 Attachment'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                        lineNumber: 296,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                lineNumber: 293,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$forum$2f$forum$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].postMeta,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '1rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.3rem'
                                            },
                                            children: [
                                                "💬 ",
                                                post.comments && post.comments[0] ? post.comments[0].count : 0
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                            lineNumber: 308,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>handleLike(e, post.id, isLiked),
                                            style: {
                                                background: 'none',
                                                border: 'none',
                                                color: isLiked ? '#ef4444' : 'inherit',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.3rem',
                                                fontWeight: isLiked ? 600 : 400,
                                                transform: isLiked ? 'scale(1.1)' : 'scale(1)',
                                                transition: 'all 0.2s'
                                            },
                                            className: "like-btn",
                                            children: [
                                                isLiked ? '❤️' : '🤍',
                                                " ",
                                                post.likes_count
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                            lineNumber: 309,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                lineNumber: 306,
                                columnNumber: 33
                            }, this)
                        ]
                    }, post.id, true, {
                        fileName: "[project]/src/app/dashboard/forum/page.tsx",
                        lineNumber: 274,
                        columnNumber: 29
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                lineNumber: 252,
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
                                lineNumber: 333,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                            lineNumber: 332,
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
                                            lineNumber: 337,
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
                                            lineNumber: 338,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                    lineNumber: 336,
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
                                            lineNumber: 347,
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
                                                    lineNumber: 354,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                            lineNumber: 348,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                    lineNumber: 346,
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
                                            lineNumber: 360,
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
                                            lineNumber: 361,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                    lineNumber: 359,
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
                                            children: "Attachment (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                            lineNumber: 371,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            onChange: (e)=>setSelectedFile(e.target.files ? e.target.files[0] : null),
                                            style: {
                                                fontSize: '0.9rem'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                            lineNumber: 372,
                                            columnNumber: 33
                                        }, this),
                                        selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '0.8rem',
                                                color: 'var(--primary)',
                                                marginTop: '0.3rem'
                                            },
                                            children: [
                                                "Selected: ",
                                                selectedFile.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                            lineNumber: 377,
                                            columnNumber: 50
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                    lineNumber: 370,
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
                                            disabled: uploading,
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                            lineNumber: 381,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nextBtn,
                                            onClick: handleCreatePost,
                                            style: {
                                                flex: 1,
                                                opacity: uploading ? 0.7 : 1
                                            },
                                            disabled: uploading,
                                            children: uploading ? 'Posting...' : 'Post Question'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                            lineNumber: 389,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                                    lineNumber: 380,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/forum/page.tsx",
                            lineNumber: 335,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/forum/page.tsx",
                    lineNumber: 331,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/forum/page.tsx",
                lineNumber: 330,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/forum/page.tsx",
        lineNumber: 218,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_455fcbc3._.js.map