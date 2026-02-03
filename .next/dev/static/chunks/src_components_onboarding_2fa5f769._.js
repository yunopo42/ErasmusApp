(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/components/onboarding/OnboardingModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OnboardingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/onboarding/onboarding.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const COUNTRIES = [
    {
        code: 'PL',
        name: 'Poland',
        flag: '🇵🇱'
    },
    {
        code: 'IT',
        name: 'Italy',
        flag: '🇮🇹'
    },
    {
        code: 'ES',
        name: 'Spain',
        flag: '🇪🇸'
    },
    {
        code: 'DE',
        name: 'Germany',
        flag: '🇩🇪'
    },
    {
        code: 'PT',
        name: 'Portugal',
        flag: '🇵🇹'
    },
    {
        code: 'FR',
        name: 'France',
        flag: '🇫🇷'
    },
    {
        code: 'OTHER',
        name: 'Other',
        flag: '🌍'
    }
];
function OnboardingModal({ user }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        targetCountry: '',
        university: '',
        startDate: '',
        endDate: ''
    });
    const handleNext = async ()=>{
        if (step < 3) {
            setStep(step + 1);
        } else {
            await saveProfile();
        }
    };
    const saveProfile = async ()=>{
        setLoading(true);
        try {
            // 1. Update Profile
            const { error } = await supabase.from('profiles').update({
                target_country: formData.targetCountry,
                university: formData.university,
                start_date: formData.startDate,
                end_date: formData.endDate
            }).eq('id', user.id);
            if (error) throw error;
            // 2. Refresh page to remove modal
            router.refresh();
        } catch (error) {
            console.error('Error saving profile:', error);
            alert('Error saving profile. Please try again.');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepIndicator,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot} ${step === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dotActive : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                    lineNumber: 73,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot} ${step === 2 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dotActive : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                    lineNumber: 74,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot} ${step === 3 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dotActive : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                    lineNumber: 75,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                            lineNumber: 72,
                            columnNumber: 21
                        }, this),
                        step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                    children: "Where are you going? ✈️"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                    lineNumber: 81,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                                    children: "Select your Erasmus destination country."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                    lineNumber: 82,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                                    children: COUNTRIES.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].optionCard} ${formData.targetCountry === country.name ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].optionCardSelected : ''}`,
                                            onClick: ()=>setFormData({
                                                    ...formData,
                                                    targetCountry: country.name
                                                }),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flag,
                                                    children: country.flag
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].optionTitle,
                                                    children: country.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, country.code, true, {
                                            fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                            lineNumber: 86,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                    lineNumber: 84,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true),
                        step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                    children: "Which University? 🎓"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                                    children: "Tell us where you'll be studying."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                    lineNumber: 103,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                            children: "University Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                            lineNumber: 106,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                            placeholder: "e.g. University of Warsaw",
                                            value: formData.university,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    university: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                            lineNumber: 107,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                    lineNumber: 105,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true),
                        step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                    children: "When are you going? 📅"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                    lineNumber: 121,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                                    children: "Set your Erasmus timeline."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                    lineNumber: 122,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                            children: "Start Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                            lineNumber: 125,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                            value: formData.startDate,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    startDate: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                            lineNumber: 126,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                    lineNumber: 124,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                            children: "End Date (Approx.)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                            lineNumber: 135,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                            value: formData.endDate,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    endDate: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                            lineNumber: 136,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                                    lineNumber: 134,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                    lineNumber: 71,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backBtn,
                            onClick: ()=>setStep(step - 1),
                            disabled: step === 1,
                            style: {
                                visibility: step === 1 ? 'hidden' : 'visible'
                            },
                            children: "Back"
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                            lineNumber: 149,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2f$onboarding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nextBtn,
                            onClick: handleNext,
                            disabled: step === 1 && !formData.targetCountry || step === 2 && !formData.university || step === 3 && (!formData.startDate || !formData.endDate) || loading,
                            children: loading ? 'Setting up...' : step === 3 ? 'Finish Setup' : 'Next Step'
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                            lineNumber: 158,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
                    lineNumber: 148,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
            lineNumber: 69,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/onboarding/OnboardingModal.tsx",
        lineNumber: 68,
        columnNumber: 9
    }, this);
}
_s(OnboardingModal, "iSkzlGqFkwnGQfE5W3WwTD4A9gE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = OnboardingModal;
var _c;
__turbopack_context__.k.register(_c, "OnboardingModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_onboarding_2fa5f769._.js.map