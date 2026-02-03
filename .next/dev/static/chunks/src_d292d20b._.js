(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://knjyuteaxtmnivbxrnbi.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtuanl1dGVheHRtbml2YnhybmJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5NTQ4MzAsImV4cCI6MjA4NTUzMDgzMH0.PvqP8QMCLe9_pKJb9M6WEWfEF3B4LcVTgu2O-d2uMdo"));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/settings/settings.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avatar": "settings-module___0qqaW__avatar",
  "avatarContainer": "settings-module___0qqaW__avatarContainer",
  "avatarOverlay": "settings-module___0qqaW__avatarOverlay",
  "card": "settings-module___0qqaW__card",
  "container": "settings-module___0qqaW__container",
  "fileInput": "settings-module___0qqaW__fileInput",
  "formGroup": "settings-module___0qqaW__formGroup",
  "input": "settings-module___0qqaW__input",
  "label": "settings-module___0qqaW__label",
  "logoutBtn": "settings-module___0qqaW__logoutBtn",
  "row": "settings-module___0qqaW__row",
  "saveBtn": "settings-module___0qqaW__saveBtn",
  "sectionTitle": "settings-module___0qqaW__sectionTitle",
  "select": "settings-module___0qqaW__select",
});
}),
"[project]/src/app/dashboard/settings/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/settings/settings.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const COUNTRIES = [
    'Poland',
    'Italy',
    'Spain',
    'Germany',
    'France',
    'Portugal',
    'Czech Republic',
    'Netherlands'
];
function SettingsPage() {
    _s();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        full_name: '',
        target_country: '',
        university: '',
        start_date: '',
        end_date: '',
        avatar_url: ''
    });
    const [uploadingAvatar, setUploadingAvatar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsPage.useEffect": ()=>{
            fetchProfile();
        }
    }["SettingsPage.useEffect"], []);
    const fetchProfile = async ()=>{
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single();
        if (data) {
            setFormData({
                full_name: data.full_name || '',
                target_country: data.target_country || '',
                university: data.university || '',
                start_date: data.start_date || '',
                end_date: data.end_date || '',
                avatar_url: data.avatar_url || ''
            });
        }
        setLoading(false);
    };
    const handleAvatarUpload = async (event)=>{
        try {
            setUploadingAvatar(true);
            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('You must select an image to upload.');
            }
            const file = event.target.files[0];
            const fileExt = file.name.split('.').pop();
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;
            const fileName = `avatar-${Math.random()}.${fileExt}`;
            const filePath = `${user.id}/${fileName}`;
            // 1. Upload to Storage
            const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file);
            if (uploadError) throw uploadError;
            // 2. Get Public URL
            const { data: { publicUrl } } = supabase.storage.from('avatars').getPublicUrl(filePath);
            // 3. Update Profile
            const { error: updateError } = await supabase.from('profiles').update({
                avatar_url: publicUrl,
                updated_at: new Date()
            }).eq('id', user.id);
            if (updateError) throw updateError;
            setFormData((prev)=>({
                    ...prev,
                    avatar_url: publicUrl
                }));
            alert('Avatar updated!');
            router.refresh();
        } catch (error) {
            alert('Error uploading avatar: ' + error.message);
        } finally{
            setUploadingAvatar(false);
        }
    };
    const handleSave = async ()=>{
        setSaving(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        const { error } = await supabase.from('profiles').update({
            full_name: formData.full_name,
            target_country: formData.target_country,
            university: formData.university,
            start_date: formData.start_date || null,
            end_date: formData.end_date || null,
            updated_at: new Date()
        }).eq('id', user.id);
        if (error) {
            alert("Error updating profile: " + error.message);
        } else {
            alert("Profile updated successfully! ✅");
            router.refresh();
        }
        setSaving(false);
    };
    const handleLogout = async ()=>{
        await supabase.auth.signOut();
        router.push('/login');
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        style: {
            padding: '2rem'
        },
        children: "Loading settings..."
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/settings/page.tsx",
        lineNumber: 131,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '1.5rem'
                },
                children: "Account Settings"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                lineNumber: 135,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: "Profile Information"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                        lineNumber: 138,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarContainer,
                        children: [
                            formData.avatar_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: formData.avatar_url,
                                alt: "Avatar",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                lineNumber: 143,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar,
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2rem'
                                },
                                children: "👤"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                lineNumber: 149,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarOverlay,
                                children: "📷"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                lineNumber: 153,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileInput,
                                accept: "image/*",
                                onChange: handleAvatarUpload,
                                disabled: uploadingAvatar
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                lineNumber: 156,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                        lineNumber: 141,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                children: "Full Name"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                lineNumber: 166,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                value: formData.full_name,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        full_name: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                lineNumber: 167,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                        lineNumber: 165,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                style: {
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Destination Country"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                                        value: formData.target_country,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                target_country: e.target.value
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select Country"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                lineNumber: 182,
                                                columnNumber: 29
                                            }, this),
                                            COUNTRIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: c,
                                                    children: c
                                                }, c, false, {
                                                    fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 49
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                lineNumber: 175,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                style: {
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Host University"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                        value: formData.university,
                                        placeholder: "e.g. University of Warsaw",
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                university: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                lineNumber: 187,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                        lineNumber: 174,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                style: {
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Start Date"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                        value: formData.start_date,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                start_date: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                        lineNumber: 201,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                lineNumber: 199,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                style: {
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "End Date"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                        value: formData.end_date,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                end_date: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                                lineNumber: 208,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                        lineNumber: 198,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].saveBtn,
                        onClick: handleSave,
                        disabled: saving,
                        children: saving ? 'Saving...' : 'Save Changes'
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/settings/page.tsx",
                        lineNumber: 219,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                lineNumber: 137,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$settings$2f$settings$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutBtn,
                onClick: handleLogout,
                children: "Sign Out"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/settings/page.tsx",
                lineNumber: 224,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/settings/page.tsx",
        lineNumber: 134,
        columnNumber: 9
    }, this);
}
_s(SettingsPage, "VyvPFfkMdSnvQ9NarK1is+ZhgKI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SettingsPage;
var _c;
__turbopack_context__.k.register(_c, "SettingsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_d292d20b._.js.map