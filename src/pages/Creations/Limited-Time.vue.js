export default (await import('vue')).defineComponent({
    data: () => ({
        // Replace this with your dynamic data fetching logic
        limitedTimeItems: [] // Example: [{ title: "Holiday Gift Set", description: "Limited stock available!", image: "link_to_image", link: "/store/holiday" }]
    })
});
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['offer'];
    __VLS_styleScopedClasses['offer'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("limited-time-container") }, fluid: (true), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("limited-time-container") }, fluid: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("title") }, });
    if (__VLS_ctx.limitedTimeItems.length === 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("no-offers") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    else {
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.VRow;
        /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
        const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
        for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.limitedTimeItems))) {
            const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.VCol;
            /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
            // @ts-ignore
            const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ key: ((index)), cols: ("12"), md: ("4"), ...{ class: ("offer-card") }, }));
            const __VLS_14 = __VLS_13({ key: ((index)), cols: ("12"), md: ("4"), ...{ class: ("offer-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
            const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.VCard;
            /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ] } */
            // @ts-ignore
            const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("offer") }, }));
            const __VLS_20 = __VLS_19({ ...{ class: ("offer") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
            const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.VImg;
            /** @type { [typeof __VLS_components.VImg, typeof __VLS_components.vImg, typeof __VLS_components.VImg, typeof __VLS_components.vImg, ] } */
            // @ts-ignore
            const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ src: ((item.image)), ...{ class: ("offer-image") }, height: ("200px"), }));
            const __VLS_26 = __VLS_25({ src: ((item.image)), ...{ class: ("offer-image") }, height: ("200px"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
            const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.VCardTitle;
            /** @type { [typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ] } */
            // @ts-ignore
            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
            const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
            (item.title);
            __VLS_nonNullable(__VLS_35.slots).default;
            const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
            const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
            /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
            // @ts-ignore
            const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
            const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
            (item.description);
            __VLS_nonNullable(__VLS_41.slots).default;
            const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
            const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
            /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
            // @ts-ignore
            const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ href: ((item.link)), color: ("green"), outlined: (true), ...{ class: ("mt-2") }, }));
            const __VLS_44 = __VLS_43({ href: ((item.link)), color: ("green"), outlined: (true), ...{ class: ("mt-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
            __VLS_nonNullable(__VLS_47.slots).default;
            const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
            __VLS_nonNullable(__VLS_23.slots).default;
            const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
            __VLS_nonNullable(__VLS_17.slots).default;
            const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        }
        __VLS_nonNullable(__VLS_11.slots).default;
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['limited-time-container'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['no-offers'];
    __VLS_styleScopedClasses['offer-card'];
    __VLS_styleScopedClasses['offer'];
    __VLS_styleScopedClasses['offer-image'];
    __VLS_styleScopedClasses['mt-2'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
