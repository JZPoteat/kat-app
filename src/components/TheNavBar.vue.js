export default (await import('vue')).defineComponent({
    data: () => ({
        creations: [
            { title: 'Artwork', to: '/creations/artwork' },
            { title: 'Homemade Goods', to: '/creations/homemade' },
            { title: 'Limited Time', to: '/creations/limited-time' },
            { title: 'Jewelry', to: '/creations/jewelry' }
        ]
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
    __VLS_styleScopedClasses['desktop-nav'];
    __VLS_styleScopedClasses['mobile-nav'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VAppBar;
    /** @type { [typeof __VLS_components.VAppBar, typeof __VLS_components.vAppBar, typeof __VLS_components.VAppBar, typeof __VLS_components.vAppBar, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ app: (true), color: ("white"), dark: (true), }));
    const __VLS_2 = __VLS_1({ app: (true), color: ("white"), dark: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.VToolbarTitle;
    /** @type { [typeof __VLS_components.VToolbarTitle, typeof __VLS_components.vToolbarTitle, typeof __VLS_components.VToolbarTitle, typeof __VLS_components.vToolbarTitle, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("/"), }));
    const __VLS_14 = __VLS_13({ to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ alt: ("Vue logo"), ...{ class: ("logo") }, src: ("@/assets/logo.jpg"), width: ("50"), height: ("50"), });
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.VSpacer;
    /** @type { [typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("desktop-nav") }, });
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ to: ("/"), ...{ class: ("navlink") }, }));
    const __VLS_26 = __VLS_25({ to: ("/"), ...{ class: ("navlink") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_nonNullable(__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ to: ("/about"), ...{ class: ("navlink") }, }));
    const __VLS_32 = __VLS_31({ to: ("/about"), ...{ class: ("navlink") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_nonNullable(__VLS_35.slots).default;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.VMenu;
    /** @type { [typeof __VLS_components.VMenu, typeof __VLS_components.vMenu, typeof __VLS_components.VMenu, typeof __VLS_components.vMenu, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ openOnClick: (true), }));
    const __VLS_38 = __VLS_37({ openOnClick: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { activator: __VLS_thisSlot } = __VLS_nonNullable(__VLS_41.slots);
        const [{ props }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
        /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...(props), ...{ class: ("navlink") }, }));
        const __VLS_44 = __VLS_43({ ...(props), ...{ class: ("navlink") }, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        __VLS_nonNullable(__VLS_47.slots).default;
        const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    }
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.VList;
    /** @type { [typeof __VLS_components.VList, typeof __VLS_components.vList, typeof __VLS_components.VList, typeof __VLS_components.vList, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
    const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.creations))) {
        const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
        /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ key: ((index)), }));
        const __VLS_56 = __VLS_55({ key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
        const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.VListItemTitle;
        /** @type { [typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, ] } */
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({}));
        const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
        const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
        /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ to: ((item.to)), ...{ class: ("navlink") }, ...{ style: ({}) }, }));
        const __VLS_68 = __VLS_67({ to: ((item.to)), ...{ class: ("navlink") }, ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
        (item.title);
        __VLS_nonNullable(__VLS_71.slots).default;
        const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
        __VLS_nonNullable(__VLS_65.slots).default;
        const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
        __VLS_nonNullable(__VLS_59.slots).default;
        const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
    }
    __VLS_nonNullable(__VLS_53.slots).default;
    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ to: ("/store"), ...{ class: ("navlink") }, }));
    const __VLS_74 = __VLS_73({ to: ("/store"), ...{ class: ("navlink") }, }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    __VLS_nonNullable(__VLS_77.slots).default;
    const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
    const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ to: ("/contact"), ...{ class: ("navlink") }, }));
    const __VLS_80 = __VLS_79({ to: ("/contact"), ...{ class: ("navlink") }, }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    __VLS_nonNullable(__VLS_83.slots).default;
    const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mobile-nav") }, });
    const __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.VMenu;
    /** @type { [typeof __VLS_components.VMenu, typeof __VLS_components.vMenu, typeof __VLS_components.VMenu, typeof __VLS_components.vMenu, ] } */
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ bottom: (true), right: (true), }));
    const __VLS_86 = __VLS_85({ bottom: (true), right: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { activator: __VLS_thisSlot } = __VLS_nonNullable(__VLS_89.slots);
        const [{ props }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
        /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
        // @ts-ignore
        const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ icon: (true), ...(props), "aria-label": ("Menu"), }));
        const __VLS_92 = __VLS_91({ icon: (true), ...(props), "aria-label": ("Menu"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
        const __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
        /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
        // @ts-ignore
        const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({}));
        const __VLS_98 = __VLS_97({}, ...__VLS_functionalComponentArgsRest(__VLS_97));
        __VLS_nonNullable(__VLS_101.slots).default;
        const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
        __VLS_nonNullable(__VLS_95.slots).default;
        const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
    }
    const __VLS_102 = __VLS_resolvedLocalAndGlobalComponents.VList;
    /** @type { [typeof __VLS_components.VList, typeof __VLS_components.vList, typeof __VLS_components.VList, typeof __VLS_components.vList, ] } */
    // @ts-ignore
    const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ ...{ class: ("mobile-list") }, ...{ style: ({}) }, }));
    const __VLS_104 = __VLS_103({ ...{ class: ("mobile-list") }, ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_103));
    const __VLS_108 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
    /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */
    // @ts-ignore
    const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({}));
    const __VLS_110 = __VLS_109({}, ...__VLS_functionalComponentArgsRest(__VLS_109));
    const __VLS_114 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({ to: ("/"), ...{ class: ("mobile-navlink") }, }));
    const __VLS_116 = __VLS_115({ to: ("/"), ...{ class: ("mobile-navlink") }, }, ...__VLS_functionalComponentArgsRest(__VLS_115));
    __VLS_nonNullable(__VLS_119.slots).default;
    const __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_114, __VLS_116);
    __VLS_nonNullable(__VLS_113.slots).default;
    const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110);
    const __VLS_120 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
    /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */
    // @ts-ignore
    const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({}));
    const __VLS_122 = __VLS_121({}, ...__VLS_functionalComponentArgsRest(__VLS_121));
    const __VLS_126 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({ to: ("/about"), ...{ class: ("mobile-navlink") }, }));
    const __VLS_128 = __VLS_127({ to: ("/about"), ...{ class: ("mobile-navlink") }, }, ...__VLS_functionalComponentArgsRest(__VLS_127));
    __VLS_nonNullable(__VLS_131.slots).default;
    const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128);
    __VLS_nonNullable(__VLS_125.slots).default;
    const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.creations))) {
        const __VLS_132 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
        /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */
        // @ts-ignore
        const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({ key: ((index)), }));
        const __VLS_134 = __VLS_133({ key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_133));
        const __VLS_138 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
        // @ts-ignore
        const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ to: ((item.to)), ...{ class: ("mobile-navlink") }, }));
        const __VLS_140 = __VLS_139({ to: ((item.to)), ...{ class: ("mobile-navlink") }, }, ...__VLS_functionalComponentArgsRest(__VLS_139));
        (item.title);
        __VLS_nonNullable(__VLS_143.slots).default;
        const __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140);
        __VLS_nonNullable(__VLS_137.slots).default;
        const __VLS_137 = __VLS_pickFunctionalComponentCtx(__VLS_132, __VLS_134);
    }
    const __VLS_144 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
    /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */
    // @ts-ignore
    const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({}));
    const __VLS_146 = __VLS_145({}, ...__VLS_functionalComponentArgsRest(__VLS_145));
    const __VLS_150 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_151 = __VLS_asFunctionalComponent(__VLS_150, new __VLS_150({ to: ("/store"), ...{ class: ("mobile-navlink") }, }));
    const __VLS_152 = __VLS_151({ to: ("/store"), ...{ class: ("mobile-navlink") }, }, ...__VLS_functionalComponentArgsRest(__VLS_151));
    __VLS_nonNullable(__VLS_155.slots).default;
    const __VLS_155 = __VLS_pickFunctionalComponentCtx(__VLS_150, __VLS_152);
    __VLS_nonNullable(__VLS_149.slots).default;
    const __VLS_149 = __VLS_pickFunctionalComponentCtx(__VLS_144, __VLS_146);
    const __VLS_156 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
    /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */
    // @ts-ignore
    const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({}));
    const __VLS_158 = __VLS_157({}, ...__VLS_functionalComponentArgsRest(__VLS_157));
    const __VLS_162 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_163 = __VLS_asFunctionalComponent(__VLS_162, new __VLS_162({ to: ("/contact"), ...{ class: ("mobile-navlink") }, }));
    const __VLS_164 = __VLS_163({ to: ("/contact"), ...{ class: ("mobile-navlink") }, }, ...__VLS_functionalComponentArgsRest(__VLS_163));
    __VLS_nonNullable(__VLS_167.slots).default;
    const __VLS_167 = __VLS_pickFunctionalComponentCtx(__VLS_162, __VLS_164);
    __VLS_nonNullable(__VLS_161.slots).default;
    const __VLS_161 = __VLS_pickFunctionalComponentCtx(__VLS_156, __VLS_158);
    __VLS_nonNullable(__VLS_107.slots).default;
    const __VLS_107 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104);
    const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['desktop-nav'];
    __VLS_styleScopedClasses['navlink'];
    __VLS_styleScopedClasses['navlink'];
    __VLS_styleScopedClasses['navlink'];
    __VLS_styleScopedClasses['navlink'];
    __VLS_styleScopedClasses['navlink'];
    __VLS_styleScopedClasses['navlink'];
    __VLS_styleScopedClasses['mobile-nav'];
    __VLS_styleScopedClasses['mobile-list'];
    __VLS_styleScopedClasses['mobile-navlink'];
    __VLS_styleScopedClasses['mobile-navlink'];
    __VLS_styleScopedClasses['mobile-navlink'];
    __VLS_styleScopedClasses['mobile-navlink'];
    __VLS_styleScopedClasses['mobile-navlink'];
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
