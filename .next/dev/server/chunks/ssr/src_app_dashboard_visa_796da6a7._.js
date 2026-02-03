module.exports = [
"[project]/src/app/dashboard/visa/checklist.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "addBtn": "checklist-module__kRuDRa__addBtn",
  "addInput": "checklist-module__kRuDRa__addInput",
  "addTaskContainer": "checklist-module__kRuDRa__addTaskContainer",
  "categories": "checklist-module__kRuDRa__categories",
  "categoryBtn": "checklist-module__kRuDRa__categoryBtn",
  "categoryBtnActive": "checklist-module__kRuDRa__categoryBtnActive",
  "categoryTitle": "checklist-module__kRuDRa__categoryTitle",
  "checkbox": "checklist-module__kRuDRa__checkbox",
  "container": "checklist-module__kRuDRa__container",
  "countBadge": "checklist-module__kRuDRa__countBadge",
  "emptyIcon": "checklist-module__kRuDRa__emptyIcon",
  "emptyState": "checklist-module__kRuDRa__emptyState",
  "emptyText": "checklist-module__kRuDRa__emptyText",
  "emptyTitle": "checklist-module__kRuDRa__emptyTitle",
  "generateBtn": "checklist-module__kRuDRa__generateBtn",
  "header": "checklist-module__kRuDRa__header",
  "headerTitle": "checklist-module__kRuDRa__headerTitle",
  "mainArea": "checklist-module__kRuDRa__mainArea",
  "progressBar": "checklist-module__kRuDRa__progressBar",
  "progressContainer": "checklist-module__kRuDRa__progressContainer",
  "progressFill": "checklist-module__kRuDRa__progressFill",
  "taskItem": "checklist-module__kRuDRa__taskItem",
  "taskLabel": "checklist-module__kRuDRa__taskLabel",
  "taskLabelCompleted": "checklist-module__kRuDRa__taskLabelCompleted",
  "taskList": "checklist-module__kRuDRa__taskList",
});
}),
"[project]/src/app/dashboard/visa/modal/modal.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "closeBtn": "modal-module__mHyblW__closeBtn",
  "content": "modal-module__mHyblW__content",
  "deleteBtn": "modal-module__mHyblW__deleteBtn",
  "footer": "modal-module__mHyblW__footer",
  "header": "modal-module__mHyblW__header",
  "input": "modal-module__mHyblW__input",
  "label": "modal-module__mHyblW__label",
  "modal": "modal-module__mHyblW__modal",
  "modalIn": "modal-module__mHyblW__modalIn",
  "overlay": "modal-module__mHyblW__overlay",
  "saveBtn": "modal-module__mHyblW__saveBtn",
  "textarea": "modal-module__mHyblW__textarea",
  "title": "modal-module__mHyblW__title",
});
}),
"[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewTaskModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/visa/modal/modal.module.css [app-ssr] (css module)");
;
;
;
function NewTaskModal({ isOpen, onClose, onSave, activeCategory, initialData }) {
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialData?.title || "");
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialData?.notes || "");
    const [priority, setPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialData?.priority || "Medium");
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialData?.due_date ? new Date(initialData.due_date).toISOString().split('T')[0] : "");
    if (!isOpen) return null;
    const handleSubmit = ()=>{
        if (!title.trim()) return;
        onSave({
            title,
            category: activeCategory,
            notes,
            priority,
            due_date: date ? new Date(date).toISOString() : undefined
        });
        onClose();
        // Reset
        setTitle("");
        setNotes("");
        setPriority("Medium");
        setDate("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overlay,
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modal,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: initialData ? "Edit Task" : "New Visa Task"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                            lineNumber: 50,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
                            onClick: onClose,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                            lineNumber: 51,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: "Category"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '0.5rem',
                                        backgroundColor: 'var(--secondary)',
                                        borderRadius: '0.5rem',
                                        fontSize: '0.9rem',
                                        color: 'var(--secondary-foreground)'
                                    },
                                    children: activeCategory
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                                    lineNumber: 57,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                            lineNumber: 55,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: "Task Title"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                                    lineNumber: 63,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                                    placeholder: "e.g., Book embassy appointment",
                                    value: title,
                                    onChange: (e)=>setTitle(e.target.value),
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                                    lineNumber: 64,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                            lineNumber: 62,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '1rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                            children: "Due Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                                            lineNumber: 75,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                                            value: date,
                                            onChange: (e)=>setDate(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                                            lineNumber: 76,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                                    lineNumber: 74,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                            children: "Priority"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                                            lineNumber: 84,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                                            value: priority,
                                            onChange: (e)=>setPriority(e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "High",
                                                    children: "High 🔥"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Medium",
                                                    children: "Medium"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Low",
                                                    children: "Low"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                                            lineNumber: 85,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                                    lineNumber: 83,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                            lineNumber: 73,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: "Notes"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textarea,
                                    placeholder: "Add details, links, or required documents...",
                                    value: notes,
                                    onChange: (e)=>setNotes(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                                    lineNumber: 99,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                            lineNumber: 97,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].deleteBtn,
                            onClick: onClose,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                            lineNumber: 109,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].saveBtn,
                            onClick: handleSubmit,
                            children: "Save Task"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                            lineNumber: 110,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
                    lineNumber: 108,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
            lineNumber: 48,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx",
        lineNumber: 47,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/dashboard/visa/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChecklistPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/visa/checklist.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$NewTaskModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/visa/modal/NewTaskModal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const CATEGORIES = [
    "Documents",
    "Financial",
    "University",
    "Health",
    "Other"
];
function ChecklistPage() {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Documents");
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Modal State
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingTask, setEditingTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch tasks on load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchTasks();
    }, []);
    const fetchTasks = async ()=>{
        setLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            const { data, error } = await supabase.from('checklist_items').select('*').eq('user_id', user.id).order('created_at', {
                ascending: true
            });
            if (data) setTasks(data);
        }
        setLoading(false);
    };
    const handleSaveTask = async (taskData)=>{
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        // If editing (not implemented in this step fully, but simpler for now)
        // Let's assume create only for now or simple logic
        const newTask = {
            title: taskData.title,
            category: taskData.category,
            notes: taskData.notes,
            due_date: taskData.due_date,
            priority: taskData.priority,
            user_id: user.id
        };
        const { data, error } = await supabase.from('checklist_items').insert(newTask).select().single();
        if (error) {
            console.error(error);
            alert("Error saving task");
        } else {
            setTasks([
                ...tasks,
                data
            ]);
        }
    };
    const toggleTask = async (taskId, currentStatus)=>{
        // Optimistic Update
        setTasks(tasks.map((t)=>t.id === taskId ? {
                ...t,
                is_completed: !currentStatus
            } : t));
        const { error } = await supabase.from('checklist_items').update({
            is_completed: !currentStatus
        }).eq('id', taskId);
        if (error) {
            console.error(error);
            fetchTasks(); // Revert
        }
    };
    // Filter tasks for active category
    const activeTasks = tasks.filter((t)=>t.category === activeCategory);
    // Calculate progress
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((t)=>t.is_completed).length;
    const progress = totalTasks === 0 ? 0 : Math.round(completedTasks / totalTasks * 100);
    const getPriorityColor = (p)=>{
        if (p === 'High') return '#ef4444';
        if (p === 'Medium') return '#f59e0b';
        return '#10b981';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categories,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryTitle,
                        children: "Visa Steps"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/visa/page.tsx",
                        lineNumber: 115,
                        columnNumber: 17
                    }, this),
                    CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryBtn} ${activeCategory === cat ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryBtnActive : ''}`,
                            onClick: ()=>setActiveCategory(cat),
                            children: [
                                cat,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].countBadge,
                                    children: tasks.filter((t)=>t.category === cat && !t.is_completed).length
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, cat, true, {
                            fileName: "[project]/src/app/dashboard/visa/page.tsx",
                            lineNumber: 117,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/visa/page.tsx",
                lineNumber: 114,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mainArea,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headerTitle,
                                        children: [
                                            activeCategory,
                                            " Checklist"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressContainer,
                                        style: {
                                            marginTop: '0.5rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressBar,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressFill,
                                                    style: {
                                                        width: `${progress}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '0.85rem',
                                                    color: 'var(--secondary-foreground)'
                                                },
                                                children: [
                                                    progress,
                                                    "% Complete"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                lineNumber: 133,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addBtn,
                                onClick: ()=>{
                                    setEditingTask(null);
                                    setIsModalOpen(true);
                                },
                                children: "+ New Item"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                lineNumber: 143,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/visa/page.tsx",
                        lineNumber: 132,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].taskList,
                        children: activeTasks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                padding: '3rem',
                                color: 'var(--secondary-foreground)'
                            },
                            children: [
                                "No tasks in this category. ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 56
                                }, this),
                                ' Click "+ New Item" to add one.'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/visa/page.tsx",
                            lineNumber: 156,
                            columnNumber: 25
                        }, this) : activeTasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].taskItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkbox,
                                        style: {
                                            backgroundColor: task.is_completed ? 'var(--primary)' : 'transparent',
                                            borderColor: task.is_completed ? 'var(--primary)' : 'currentColor'
                                        },
                                        onClick: ()=>toggleTask(task.id, task.is_completed)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            marginLeft: '1rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: task.is_completed ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].taskLabelCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].taskLabel,
                                                onClick: ()=>toggleTask(task.id, task.is_completed),
                                                style: {
                                                    fontWeight: 500
                                                },
                                                children: task.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: '1rem',
                                                    marginTop: '0.3rem',
                                                    fontSize: '0.8rem',
                                                    color: 'var(--secondary-foreground)'
                                                },
                                                children: [
                                                    task.due_date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "📅 ",
                                                            new Date(task.due_date).toLocaleDateString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 45
                                                    }, this),
                                                    task.priority && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: getPriorityColor(task.priority),
                                                            fontWeight: 600
                                                        },
                                                        children: [
                                                            task.priority,
                                                            " Priority"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 37
                                            }, this),
                                            task.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.85rem',
                                                    color: 'var(--secondary-foreground)',
                                                    marginTop: '0.3rem',
                                                    fontStyle: 'italic'
                                                },
                                                children: [
                                                    "Note: ",
                                                    task.notes
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, task.id, true, {
                                fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                lineNumber: 161,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/visa/page.tsx",
                        lineNumber: 154,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/visa/page.tsx",
                lineNumber: 131,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$NewTaskModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                onSave: handleSaveTask,
                activeCategory: activeCategory,
                initialData: editingTask
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/visa/page.tsx",
                lineNumber: 203,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/visa/page.tsx",
        lineNumber: 112,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_app_dashboard_visa_796da6a7._.js.map