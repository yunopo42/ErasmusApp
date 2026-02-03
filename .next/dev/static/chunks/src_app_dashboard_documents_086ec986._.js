(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/dashboard/documents/documents.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionBtn": "documents-module__AEy7ma__actionBtn",
  "actions": "documents-module__AEy7ma__actions",
  "container": "documents-module__AEy7ma__container",
  "fileCard": "documents-module__AEy7ma__fileCard",
  "fileIcon": "documents-module__AEy7ma__fileIcon",
  "fileInfo": "documents-module__AEy7ma__fileInfo",
  "fileList": "documents-module__AEy7ma__fileList",
  "fileMeta": "documents-module__AEy7ma__fileMeta",
  "fileName": "documents-module__AEy7ma__fileName",
  "hiddenInput": "documents-module__AEy7ma__hiddenInput",
  "uploadArea": "documents-module__AEy7ma__uploadArea",
  "uploadIcon": "documents-module__AEy7ma__uploadIcon",
  "uploadSubtitle": "documents-module__AEy7ma__uploadSubtitle",
  "uploadTitle": "documents-module__AEy7ma__uploadTitle",
});
}),
"[project]/src/app/dashboard/documents/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocumentsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$documents$2f$documents$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/documents/documents.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function DocumentsPage() {
    _s();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DocumentsPage.useEffect": ()=>{
            fetchFiles();
        }
    }["DocumentsPage.useEffect"], []);
    const fetchFiles = async ()=>{
        setLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        // List files in the user's folder
        const { data, error } = await supabase.storage.from('documents').list(user.id + '/', {
            limit: 100,
            offset: 0,
            sortBy: {
                column: 'created_at',
                order: 'desc'
            }
        });
        if (error) {
            console.error("Error fetching files:", error);
        } else if (data) {
            // Construct file objects
            const fileList = data.map((file)=>({
                    id: file.name,
                    name: file.name,
                    size: file.metadata?.size || 0,
                    created_at: file.created_at,
                    url: "" // Url will be signed on demand or public
                }));
            setFiles(fileList);
        }
        setLoading(false);
    };
    const handleFileSelect = async (e)=>{
        if (!e.target.files || e.target.files.length === 0) return;
        const file = e.target.files[0];
        await uploadFile(file);
    };
    const uploadFile = async (file)=>{
        setUploading(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        const filePath = `${user.id}/${file.name}`;
        const { error } = await supabase.storage.from('documents').upload(filePath, file, {
            cacheControl: '3600',
            upsert: false // Don't overwrite
        });
        if (error) {
            alert("Error uploading file: " + error.message);
        } else {
            await fetchFiles();
        }
        setUploading(false);
    };
    const downloadFile = async (fileName)=>{
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        const { data, error } = await supabase.storage.from('documents').createSignedUrl(`${user.id}/${fileName}`, 60); // Valid for 60s
        if (data?.signedUrl) {
            window.open(data.signedUrl, '_blank');
        }
    };
    const deleteFile = async (fileName)=>{
        if (!confirm("Are you sure you want to delete this file?")) return;
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        const { error } = await supabase.storage.from('documents').remove([
            `${user.id}/${fileName}`
        ]);
        if (error) {
            alert("Error deleting: " + error.message);
        } else {
            // Remove from local state
            setFiles((prev)=>prev.filter((f)=>f.name !== fileName));
        }
    };
    const formatSize = (bytes)=>{
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = [
            'B',
            'KB',
            'MB',
            'GB'
        ];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$documents$2f$documents$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '1rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: '1.5rem',
                            fontWeight: 700
                        },
                        children: "My Documents"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/documents/page.tsx",
                        lineNumber: 129,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'var(--secondary-foreground)'
                        },
                        children: "Safely store your passport, acceptance letters, and more."
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/documents/page.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/documents/page.tsx",
                lineNumber: 128,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$documents$2f$documents$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadArea,
                onClick: ()=>fileInputRef.current?.click(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$documents$2f$documents$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadIcon,
                        children: uploading ? '⏳' : '☁️'
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/documents/page.tsx",
                        lineNumber: 138,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$documents$2f$documents$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadTitle,
                        children: uploading ? 'Uploading...' : 'Click to Upload'
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/documents/page.tsx",
                        lineNumber: 139,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$documents$2f$documents$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadSubtitle,
                        children: "PDF, JPG, PNG (Max 5MB)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/documents/page.tsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        ref: fileInputRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$documents$2f$documents$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hiddenInput,
                        onChange: handleFileSelect,
                        accept: ".pdf,.jpg,.jpeg,.png",
                        disabled: uploading
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/documents/page.tsx",
                        lineNumber: 141,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/documents/page.tsx",
                lineNumber: 134,
                columnNumber: 13
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading files..."
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/documents/page.tsx",
                lineNumber: 153,
                columnNumber: 17
            }, this) : files.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    textAlign: 'center',
                    color: 'var(--secondary-foreground)',
                    padding: '2rem'
                },
                children: "No documents uploaded yet."
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/documents/page.tsx",
                lineNumber: 155,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$documents$2f$documents$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileList,
                children: files.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$documents$2f$documents$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$documents$2f$documents$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileIcon,
                                children: file.name.endsWith('.pdf') ? '📄' : '🖼️'
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/documents/page.tsx",
                                lineNumber: 160,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$documents$2f$documents$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$documents$2f$documents$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileName,
                                        title: file.name,
                                        children: file.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/documents/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$documents$2f$documents$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileMeta,
                                        children: [
                                            formatSize(file.size),
                                            " • ",
                                            new Date(file.created_at).toLocaleDateString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/documents/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/documents/page.tsx",
                                lineNumber: 163,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$documents$2f$documents$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$documents$2f$documents$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionBtn,
                                        title: "Download",
                                        onClick: ()=>downloadFile(file.name),
                                        children: "⬇️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/documents/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$documents$2f$documents$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionBtn,
                                        title: "Delete",
                                        onClick: ()=>deleteFile(file.name),
                                        children: "🗑️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/documents/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/documents/page.tsx",
                                lineNumber: 167,
                                columnNumber: 29
                            }, this)
                        ]
                    }, file.id, true, {
                        fileName: "[project]/src/app/dashboard/documents/page.tsx",
                        lineNumber: 159,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/documents/page.tsx",
                lineNumber: 157,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/documents/page.tsx",
        lineNumber: 127,
        columnNumber: 9
    }, this);
}
_s(DocumentsPage, "qm4VKImJ1M6pkAVLRHJP4/0ssNU=");
_c = DocumentsPage;
var _c;
__turbopack_context__.k.register(_c, "DocumentsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_dashboard_documents_086ec986._.js.map