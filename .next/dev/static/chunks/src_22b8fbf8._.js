(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/dashboard/calendar/calendar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "calendarGrid": "calendar-module__5bMD0q__calendarGrid",
  "container": "calendar-module__5bMD0q__container",
  "dayCell": "calendar-module__5bMD0q__dayCell",
  "dayName": "calendar-module__5bMD0q__dayName",
  "dayNumber": "calendar-module__5bMD0q__dayNumber",
  "eventChip": "calendar-module__5bMD0q__eventChip",
  "header": "calendar-module__5bMD0q__header",
  "monthTitle": "calendar-module__5bMD0q__monthTitle",
  "navBtn": "calendar-module__5bMD0q__navBtn",
  "otherMonth": "calendar-module__5bMD0q__otherMonth",
  "today": "calendar-module__5bMD0q__today",
  "type_academic": "calendar-module__5bMD0q__type_academic",
  "type_deadline": "calendar-module__5bMD0q__type_deadline",
  "type_social": "calendar-module__5bMD0q__type_social",
  "type_travel": "calendar-module__5bMD0q__type_travel",
});
}),
"[project]/src/components/onboarding/onboarding.module.css [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/src/app/dashboard/calendar/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalendarPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$calendar$2f$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/calendar/calendar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/onboarding.module.css [app-client] (css module)"); // Reuse modal
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CalendarPage() {
    _s();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Modal State
    const [newEvent, setNewEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        type: 'academic',
        endDate: ''
    });
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CalendarPage.useEffect": ()=>{
            fetchEvents();
        }
    }["CalendarPage.useEffect"], [
        currentDate
    ]); // Refetch when month changes
    const fetchEvents = async ()=>{
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        // Get range for current month view (simplified: fetch all for now, filter in memory)
        // Ideally we filter by date range in SQL
        const { data } = await supabase.from('calendar_events').select('*').eq('user_id', user.id);
        if (data) setEvents(data);
    };
    const handleAddEvent = async ()=>{
        const { data: { user } } = await supabase.auth.getUser();
        if (!user || !selectedDate || !newEvent.title) return;
        // Use selected end date, or default to start date if empty
        const finalEndDate = newEvent.endDate || selectedDate;
        // Basic validation
        if (finalEndDate < selectedDate) {
            alert("End date cannot be before start date!");
            return;
        }
        const { error } = await supabase.from('calendar_events').insert({
            user_id: user.id,
            title: newEvent.title,
            start_date: selectedDate,
            end_date: finalEndDate,
            type: newEvent.type
        });
        if (error) {
            alert("Error adding event: " + error.message);
        } else {
            setIsModalOpen(false);
            setNewEvent({
                title: '',
                type: 'academic',
                endDate: ''
            });
            fetchEvents();
        }
    };
    // -- Calendar Logic --
    // Helper to get days in month
    const getDaysInMonth = (year, month)=>{
        return new Date(year, month + 1, 0).getDate();
    };
    // Get first day of month (0 = Sun, 1 = Mon...)
    const getFirstDayOfMonth = (year, month)=>{
        // Adjust logic so week starts on Monday (1)
        let day = new Date(year, month, 1).getDay();
        return day === 0 ? 6 : day - 1;
    };
    const renderCalendarDays = ()=>{
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const totalDays = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        const daysArray = [];
        // Empty cells for previous month
        for(let i = 0; i < firstDay; i++){
            daysArray.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$calendar$2f$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dayCell} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$calendar$2f$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].otherMonth}`
            }, `empty-${i}`, false, {
                fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                lineNumber: 99,
                columnNumber: 28
            }, this));
        }
        // Days of current month
        for(let day = 1; day <= totalDays; day++){
            // Format date string YYYY-MM-DD
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            // Check if today
            const isToday = new Date().toDateString() === new Date(year, month, day).toDateString();
            // Find events that span this day
            // Logic: Event starts on or before today AND ends on or after today
            const dayEvents = events.filter((e)=>{
                const end = e.end_date || e.start_date;
                return e.start_date <= dateStr && end >= dateStr;
            });
            daysArray.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$calendar$2f$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dayCell} ${isToday ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$calendar$2f$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].today : ''}`,
                onClick: ()=>{
                    setSelectedDate(dateStr);
                    setNewEvent({
                        ...newEvent,
                        endDate: dateStr
                    }); // Default end date to current
                    setIsModalOpen(true);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$calendar$2f$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dayNumber,
                        children: day
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                        lineNumber: 127,
                        columnNumber: 21
                    }, this),
                    dayEvents.map((ev)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$calendar$2f$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventChip} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$calendar$2f$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][`type_${ev.type}`]}`,
                            children: ev.title
                        }, ev.id, false, {
                            fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                            lineNumber: 129,
                            columnNumber: 25
                        }, this))
                ]
            }, day, true, {
                fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                lineNumber: 118,
                columnNumber: 17
            }, this));
        }
        // Fill remaining cells to keep grid shape (optional, skipping for brevity)
        return daysArray;
    };
    const changeMonth = (offset)=>{
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$calendar$2f$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$calendar$2f$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$calendar$2f$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].monthTitle,
                        children: currentDate.toLocaleString('default', {
                            month: 'long',
                            year: 'numeric'
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                        lineNumber: 149,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '0.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$calendar$2f$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navBtn,
                                onClick: ()=>changeMonth(-1),
                                children: "← Prev"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                                lineNumber: 153,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$calendar$2f$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navBtn,
                                onClick: ()=>changeMonth(1),
                                children: "Next →"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                                lineNumber: 154,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                        lineNumber: 152,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                lineNumber: 148,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$calendar$2f$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendarGrid,
                children: [
                    [
                        'Mon',
                        'Tue',
                        'Wed',
                        'Thu',
                        'Fri',
                        'Sat',
                        'Sun'
                    ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$calendar$2f$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dayName,
                            children: d
                        }, d, false, {
                            fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                            lineNumber: 162,
                            columnNumber: 21
                        }, this)),
                    renderCalendarDays()
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                lineNumber: 159,
                columnNumber: 13
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
                style: {
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
                    style: {
                        maxWidth: '400px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '1.5rem',
                                borderBottom: '1px solid var(--border)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '1.25rem'
                                },
                                children: [
                                    "Add Event to ",
                                    selectedDate
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                                lineNumber: 173,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                            lineNumber: 172,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                marginBottom: '0.5rem',
                                                fontWeight: 500
                                            },
                                            children: "Event Title"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                            placeholder: "e.g. Exam, Trip to Paris",
                                            value: newEvent.title,
                                            onChange: (e)=>setNewEvent({
                                                    ...newEvent,
                                                    title: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                marginBottom: '0.5rem',
                                                fontWeight: 500
                                            },
                                            children: "End Date (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                            value: newEvent.endDate,
                                            min: selectedDate || '',
                                            onChange: (e)=>setNewEvent({
                                                    ...newEvent,
                                                    endDate: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '0.75rem',
                                                color: 'var(--secondary-foreground)',
                                                marginTop: '0.25rem'
                                            },
                                            children: "Leave same as start date for single day event."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                marginBottom: '0.5rem',
                                                fontWeight: 500
                                            },
                                            children: "Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                                            lineNumber: 202,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '0.5rem'
                                            },
                                            children: [
                                                'academic',
                                                'travel',
                                                'social',
                                                'deadline'
                                            ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setNewEvent({
                                                            ...newEvent,
                                                            type: t
                                                        }),
                                                    style: {
                                                        flex: 1,
                                                        padding: '0.5rem',
                                                        borderRadius: '0.5rem',
                                                        border: `1px solid ${newEvent.type === t ? 'var(--primary)' : 'var(--border)'}`,
                                                        background: newEvent.type === t ? 'var(--secondary)' : 'transparent',
                                                        cursor: 'pointer',
                                                        textTransform: 'capitalize',
                                                        fontSize: '0.75rem'
                                                    },
                                                    children: t
                                                }, t, false, {
                                                    fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                                            lineNumber: 203,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '1rem',
                                        marginTop: '0.5rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsModalOpen(false),
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backBtn,
                                            style: {
                                                flex: 1,
                                                border: '1px solid var(--border)'
                                            },
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                                            lineNumber: 226,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleAddEvent,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nextBtn,
                                            style: {
                                                flex: 1
                                            },
                                            children: "Save Event"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                                            lineNumber: 233,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                                    lineNumber: 225,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                            lineNumber: 176,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                    lineNumber: 171,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/calendar/page.tsx",
                lineNumber: 170,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/calendar/page.tsx",
        lineNumber: 146,
        columnNumber: 9
    }, this);
}
_s(CalendarPage, "xszPGlo0GKQWVPNEDzmz+sefXmk=");
_c = CalendarPage;
var _c;
__turbopack_context__.k.register(_c, "CalendarPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_22b8fbf8._.js.map