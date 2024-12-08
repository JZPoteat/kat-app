import { defineComponent } from 'vue';
export default defineComponent({
    name: 'FaqPage',
    data() {
        return {
            faqs: [
                {
                    question: 'What types of products do you make?',
                    answer: 'I specialize in creating a wide variety of handmade crafts, including custom art, personalized vinyl designs, embroidery, jewelry, and T-shirts. All products are made with clean, high-quality ingredients or materials, ensuring a unique and personal touch to every order.'
                },
                {
                    question: 'Are all your products handmade?',
                    answer: 'Yes!'
                },
                {
                    question: 'Can I request custom designs or personalized items?',
                    answer: 'Absolutely! Just contact me with your idea, and we can work together to make something special!'
                },
                {
                    question: 'What is the processing time for custom orders?',
                    answer: "Custom orders typically take between 1-2 weeks, depending on the complexity of the design and my current order queue. I'll always keep you updated along the way."
                },
                {
                    question: 'Do you offer refunds or exchanges?',
                    answer: "Due to the personalized nature of my products, I don't offer refunds or exchanges on custom items. However, if there's an issue with your order, please reach out within 7 days, and I'll do my best to make it right!"
                },
                {
                    question: 'How do I care for my handmade items?',
                    answer: "For vinyl products, hand washing is best to preserve the design. Embroidered and sewn items should be gently washed in cold water and air-dried to maintain their quality. If you're ever unsure, feel free to contact me for care instructions specific to your item."
                },
                {
                    question: 'Do you ship internationally?',
                    answer: "At the moment, I only ship within the United States, but I'm exploring options for international shipping in the future!"
                },
                {
                    question: 'Can I return a non-custom item?',
                    answer: 'Yes, for non-custom items, returns are accepted within 14 days of receiving your order, as long as the item is unused and in its original condition. The buyer is responsible for return shipping costs.'
                }
            ]
        };
    }
});
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
    __VLS_styleScopedClasses['faq-content'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("faq-page") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("faq-page") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ justify: ("center"), }));
    const __VLS_8 = __VLS_7({ justify: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ cols: ("12"), md: ("8"), }));
    const __VLS_14 = __VLS_13({ cols: ("12"), md: ("8"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("faq-title text-left") }, });
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.VExpansionPanels;
    /** @type { [typeof __VLS_components.VExpansionPanels, typeof __VLS_components.vExpansionPanels, typeof __VLS_components.VExpansionPanels, typeof __VLS_components.vExpansionPanels, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    for (const [faq, index] of __VLS_getVForSourceType((__VLS_ctx.faqs))) {
        const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.VExpansionPanel;
        /** @type { [typeof __VLS_components.VExpansionPanel, typeof __VLS_components.vExpansionPanel, typeof __VLS_components.VExpansionPanel, typeof __VLS_components.vExpansionPanel, ] } */
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ key: ((index)), ...{ class: ("faq-panel text-left") }, }));
        const __VLS_26 = __VLS_25({ key: ((index)), ...{ class: ("faq-panel text-left") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.VExpansionPanelHeader;
        /** @type { [typeof __VLS_components.VExpansionPanelHeader, typeof __VLS_components.vExpansionPanelHeader, typeof __VLS_components.VExpansionPanelHeader, typeof __VLS_components.vExpansionPanelHeader, ] } */
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ class: ("faq-header mb-10") }, }));
        const __VLS_32 = __VLS_31({ ...{ class: ("faq-header mb-10") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
        /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ left: (true), }));
        const __VLS_38 = __VLS_37({ left: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        __VLS_nonNullable(__VLS_41.slots).default;
        const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
        (faq.question);
        __VLS_nonNullable(__VLS_35.slots).default;
        const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
        __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
        const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.VExpansionPanelContent;
        /** @type { [typeof __VLS_components.VExpansionPanelContent, typeof __VLS_components.vExpansionPanelContent, typeof __VLS_components.VExpansionPanelContent, typeof __VLS_components.vExpansionPanelContent, ] } */
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{ class: ("faq-content") }, }));
        const __VLS_44 = __VLS_43({ ...{ class: ("faq-content") }, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        (faq.answer);
        __VLS_nonNullable(__VLS_47.slots).default;
        const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
        __VLS_nonNullable(__VLS_29.slots).default;
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    }
    __VLS_nonNullable(__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['faq-page'];
    __VLS_styleScopedClasses['faq-title'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['faq-panel'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['faq-header'];
    __VLS_styleScopedClasses['mb-10'];
    __VLS_styleScopedClasses['faq-content'];
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
