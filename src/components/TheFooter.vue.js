const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const moreLinks = [
    { title: 'TikTok', url: 'https://www.tiktok.com/', isExternal: true },
    { title: 'Instagram', url: 'https://www.instagram.com/', isExternal: true },
    { title: 'Newsletter Signup', url: '/faq', isExternal: false }
];
const policies = [
    { title: 'FAQ', url: '/faq', isExternal: false },
    { title: 'Refund Policy', url: '/refund-policy' }
];
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
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
    __VLS_styleScopedClasses['footer-link'];
    __VLS_styleScopedClasses['footer-email'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VFooter;
    /** @type { [typeof __VLS_components.VFooter, typeof __VLS_components.vFooter, typeof __VLS_components.VFooter, typeof __VLS_components.vFooter, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("custom-footer") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("custom-footer") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("footer-content") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("footer-content") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("footer-logo") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/logo.jpg"), alt: ("Company Logo"), ...{ class: ("footer-logo-img") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("footer-links") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("footer-section-title") }, });
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.VList;
    /** @type { [typeof __VLS_components.VList, typeof __VLS_components.vList, typeof __VLS_components.VList, typeof __VLS_components.vList, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    for (const [link, index] of __VLS_getVForSourceType((__VLS_ctx.moreLinks))) {
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
        /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ key: ((index)), }));
        const __VLS_20 = __VLS_19({ key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        if (link.isExternal) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((link.url)), target: ("_blank"), ...{ style: ({}) }, });
            (link.title);
        }
        else {
            const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
            /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
            // @ts-ignore
            const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ to: ((link.url)), ...{ class: ("footer-link") }, }));
            const __VLS_26 = __VLS_25({ to: ((link.url)), ...{ class: ("footer-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
            (link.title);
            __VLS_nonNullable(__VLS_29.slots).default;
            const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
        }
        __VLS_nonNullable(__VLS_23.slots).default;
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    }
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("footer-contact") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("footer-section-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("mailto:support@example.com"), ...{ class: ("footer-email") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("footer-policies") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("footer-section-title") }, });
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.VList;
    /** @type { [typeof __VLS_components.VList, typeof __VLS_components.vList, typeof __VLS_components.VList, typeof __VLS_components.vList, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
    const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
    for (const [policy, index] of __VLS_getVForSourceType((__VLS_ctx.policies))) {
        const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
        /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ key: ((index)), }));
        const __VLS_38 = __VLS_37({ key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ to: ((policy.url)), ...{ class: ("footer-link") }, }));
        const __VLS_44 = __VLS_43({ to: ((policy.url)), ...{ class: ("footer-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        (policy.title);
        __VLS_nonNullable(__VLS_47.slots).default;
        const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
        __VLS_nonNullable(__VLS_41.slots).default;
        const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    }
    __VLS_nonNullable(__VLS_35.slots).default;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['custom-footer'];
    __VLS_styleScopedClasses['footer-content'];
    __VLS_styleScopedClasses['footer-logo'];
    __VLS_styleScopedClasses['footer-logo-img'];
    __VLS_styleScopedClasses['footer-links'];
    __VLS_styleScopedClasses['footer-section-title'];
    __VLS_styleScopedClasses['footer-link'];
    __VLS_styleScopedClasses['footer-contact'];
    __VLS_styleScopedClasses['footer-section-title'];
    __VLS_styleScopedClasses['footer-email'];
    __VLS_styleScopedClasses['footer-policies'];
    __VLS_styleScopedClasses['footer-section-title'];
    __VLS_styleScopedClasses['footer-link'];
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
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            moreLinks: moreLinks,
            policies: policies,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
