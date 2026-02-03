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
"[project]/src/app/dashboard/visa/checklist.module.css [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/src/app/dashboard/visa/modal/modal.module.css [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/src/app/dashboard/visa/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChecklistPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/visa/checklist.module.css [app-client] (css module)");
// Sub-component for the Modal (can be in same file for simplicity now)
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/visa/modal/modal.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Documents");
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newTaskTitle, setNewTaskTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Fetch tasks on load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChecklistPage.useEffect": ()=>{
            fetchTasks();
        }
    }["ChecklistPage.useEffect"], []);
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
    const addTask = async ()=>{
        if (!newTaskTitle.trim()) return;
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        const optimisticTask = {
            id: Math.random().toString(),
            title: newTaskTitle,
            is_completed: false,
            category: activeCategory,
            user_id: user.id
        };
        // Optimistic Update
        setTasks([
            ...tasks,
            optimisticTask
        ]);
        setNewTaskTitle("");
        const { data, error } = await supabase.from('checklist_items').insert({
            title: optimisticTask.title,
            category: optimisticTask.category,
            user_id: optimisticTask.user_id
        }).select().single();
        if (error) {
            console.error(error);
            // Revert if error (simplified for now)
            fetchTasks();
        } else {
            // Update with real ID
            setTasks((prev)=>prev.map((t)=>t.id === optimisticTask.id ? data : t));
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
    // Check if user has ANY tasks at all (to show general empty state)
    const hasAnyTasks = tasks.length > 0;
    const generateStarterChecklist = async ()=>{
        setLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        const starterItems = [
            {
                title: 'Apply for Passport (Valid min 6 months)',
                category: 'Documents'
            },
            {
                title: 'Get Acceptance Letter from Host University',
                category: 'Documents'
            },
            {
                title: 'Sign Learning Agreement (Before Mobility)',
                category: 'Documents'
            },
            {
                title: 'Sign Grant Agreement',
                category: 'Documents'
            },
            {
                title: 'Open Euro Bank Account',
                category: 'Financial'
            },
            {
                title: 'Get Bank Statement for Visa',
                category: 'Financial'
            },
            {
                title: 'Buy Travel Health Insurance (30.000€ coverage)',
                category: 'Health'
            },
            {
                title: 'Book Flight Tickets',
                category: 'Other'
            },
            {
                title: 'Find Accommodation',
                category: 'Other'
            }
        ];
        const itemsToInsert = starterItems.map((item)=>({
                user_id: user.id,
                title: item.title,
                category: item.category,
                is_completed: false
            }));
        const { error } = await supabase.from('checklist_items').insert(itemsToInsert);
        if (error) {
            console.error("Error generating tasks:", JSON.stringify(error, null, 2));
            alert(`Error: ${error.message || 'Could not generate. Check console.'}`);
        } else {
            await fetchTasks();
        }
        setLoading(false);
    };
    const [selectedTask, setSelectedTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ... fetchTasks ... (update select to include all columns)
    const handleTaskClick = (task)=>{
        setSelectedTask(task);
    };
    const handleUpdateTask = async (updatedTask)=>{
        // Optimistic UI
        setTasks((prev)=>prev.map((t)=>t.id === updatedTask.id ? {
                    ...t,
                    ...updatedTask
                } : t));
        setSelectedTask(null);
        const { error } = await supabase.from('checklist_items').update({
            title: updatedTask.title,
            notes: updatedTask.notes // We will ensure this column exists
        }).eq('id', updatedTask.id);
        if (error) {
            console.error("Error updating task:", error);
            fetchTasks(); // Revert
            alert("Could not update task. " + error.message);
        }
    };
    const handleDeleteTask = async (id)=>{
        if (!confirm("Delete this requirement?")) return;
        setTasks((prev)=>prev.filter((t)=>t.id !== id));
        setSelectedTask(null);
        await supabase.from('checklist_items').delete().eq('id', id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categories,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryTitle,
                        children: "Categories"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/visa/page.tsx",
                        lineNumber: 184,
                        columnNumber: 17
                    }, this),
                    CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryBtn} ${activeCategory === cat ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryBtnActive : ''}`,
                            onClick: ()=>setActiveCategory(cat),
                            children: [
                                cat,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countBadge,
                                    children: tasks.filter((t)=>t.category === cat && !t.is_completed).length
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, cat, true, {
                            fileName: "[project]/src/app/dashboard/visa/page.tsx",
                            lineNumber: 186,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/visa/page.tsx",
                lineNumber: 183,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainArea,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerTitle,
                                children: [
                                    activeCategory,
                                    " Checklist"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                lineNumber: 202,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '0.875rem',
                                            fontWeight: 600
                                        },
                                        children: [
                                            progress,
                                            "% Done"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressBar,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressFill,
                                            style: {
                                                width: `${progress}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                            lineNumber: 206,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                lineNumber: 203,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/visa/page.tsx",
                        lineNumber: 201,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].taskList,
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                textAlign: 'center',
                                color: 'var(--secondary-foreground)',
                                padding: '2rem'
                            },
                            children: "Loading tasks..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/visa/page.tsx",
                            lineNumber: 213,
                            columnNumber: 25
                        }, this) : !hasAnyTasks ? // EMPTY STATE / GENERATOR
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyIcon,
                                    children: "📋"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyTitle,
                                    children: "Start Your Checklist"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyText,
                                    children: "You haven't added any tasks yet. Would you like to generate a standard Erasmus checklist to get started?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].generateBtn,
                                    onClick: generateStarterChecklist,
                                    disabled: loading,
                                    children: "✨ Generate Starter List"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/visa/page.tsx",
                            lineNumber: 216,
                            columnNumber: 25
                        }, this) : activeTasks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                textAlign: 'center',
                                color: 'var(--secondary-foreground)',
                                padding: '2rem'
                            },
                            children: "No tasks in this category yet."
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/visa/page.tsx",
                            lineNumber: 227,
                            columnNumber: 25
                        }, this) : activeTasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].taskItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkbox,
                                        checked: task.is_completed,
                                        onChange: ()=>toggleTask(task.id, task.is_completed)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].taskLabel} ${task.is_completed ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].taskLabelCompleted : ''}`,
                                        onClick: ()=>handleTaskClick(task),
                                        title: "Click to view details",
                                        children: task.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            handleTaskClick(task);
                                        },
                                        style: {
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            marginLeft: 'auto',
                                            opacity: 0.5
                                        },
                                        children: "✏️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                        lineNumber: 244,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, task.id, true, {
                                fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                lineNumber: 230,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/visa/page.tsx",
                        lineNumber: 211,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addTaskContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addInput,
                                placeholder: `Add a new task to ${activeCategory}...`,
                                value: newTaskTitle,
                                onChange: (e)=>setNewTaskTitle(e.target.value),
                                onKeyDown: (e)=>e.key === 'Enter' && addTask()
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                lineNumber: 257,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$checklist$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addBtn,
                                onClick: addTask,
                                disabled: !newTaskTitle.trim(),
                                children: "Add"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                lineNumber: 265,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/visa/page.tsx",
                        lineNumber: 256,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/visa/page.tsx",
                lineNumber: 200,
                columnNumber: 13
            }, this),
            selectedTask && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskDetailModal, {
                task: selectedTask,
                onClose: ()=>setSelectedTask(null),
                onSave: handleUpdateTask,
                onDelete: handleDeleteTask
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/visa/page.tsx",
                lineNumber: 277,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/visa/page.tsx",
        lineNumber: 181,
        columnNumber: 9
    }, this);
}
_s(ChecklistPage, "TAuzDNnEph8c/yk0V9/paJxHHo0=");
_c = ChecklistPage;
;
function TaskDetailModal({ task, onClose, onSave, onDelete }) {
    _s1();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(task.title);
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(task.notes || '');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            children: "Requirement Details"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/visa/page.tsx",
                            lineNumber: 299,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeBtn,
                            onClick: onClose,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/visa/page.tsx",
                            lineNumber: 300,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/visa/page.tsx",
                    lineNumber: 298,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    children: "Requirement Title"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                    lineNumber: 304,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                    value: title,
                                    onChange: (e)=>setTitle(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                    lineNumber: 305,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/visa/page.tsx",
                            lineNumber: 303,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    children: "Notes & Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                    lineNumber: 312,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea,
                                    placeholder: "Add specifics, links, or reminders here...",
                                    value: notes,
                                    onChange: (e)=>setNotes(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/visa/page.tsx",
                                    lineNumber: 313,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/visa/page.tsx",
                            lineNumber: 311,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/visa/page.tsx",
                    lineNumber: 302,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteBtn,
                            onClick: ()=>onDelete(task.id),
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/visa/page.tsx",
                            lineNumber: 322,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$visa$2f$modal$2f$modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].saveBtn,
                            onClick: ()=>onSave({
                                    ...task,
                                    title,
                                    notes
                                }),
                            children: "Save Changes"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/visa/page.tsx",
                            lineNumber: 323,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/visa/page.tsx",
                    lineNumber: 321,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/visa/page.tsx",
            lineNumber: 297,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/visa/page.tsx",
        lineNumber: 296,
        columnNumber: 9
    }, this);
}
_s1(TaskDetailModal, "5oQM8zfPXXvsogCHdup3PVDTJf0=");
_c1 = TaskDetailModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChecklistPage");
__turbopack_context__.k.register(_c1, "TaskDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_8432b825._.js.map