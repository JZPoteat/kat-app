import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'ContactForm',
    setup() {
        const form = ref({
            email: '',
            message: ''
        });
        const valid = ref(false);
        const emailAddress = 'mylittlemousecreative@gmail.com'; // Replace with your email address
        const mailtoLink = `mailto:${emailAddress}?subject=Hello from mywebsite.com!`;
        const rules = {
            required: (value) => !!value || 'Required.',
            email: (value) => {
                const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return pattern.test(value) || 'Invalid email.';
            }
        };
        const submitForm = () => {
            // Handle form submission logic here
            console.log(form.value);
        };
        return {
            form,
            valid,
            emailAddress,
            mailtoLink,
            rules,
            submitForm
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
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.VCardTitle;
    /** @type { [typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.VForm;
    /** @type { [typeof __VLS_components.VForm, typeof __VLS_components.vForm, typeof __VLS_components.VForm, typeof __VLS_components.vForm, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onSubmit': {} }, modelValue: ((__VLS_ctx.valid)), }));
    const __VLS_14 = __VLS_13({ ...{ 'onSubmit': {} }, modelValue: ((__VLS_ctx.valid)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_18;
    const __VLS_19 = {
        onSubmit: (__VLS_ctx.submitForm)
    };
    let __VLS_15;
    let __VLS_16;
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ modelValue: ((__VLS_ctx.form.email)), label: ("Email Address"), rules: (([__VLS_ctx.rules.required, __VLS_ctx.rules.email])), required: (true), }));
    const __VLS_22 = __VLS_21({ modelValue: ((__VLS_ctx.form.email)), label: ("Email Address"), rules: (([__VLS_ctx.rules.required, __VLS_ctx.rules.email])), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.VTextarea;
    /** @type { [typeof __VLS_components.VTextarea, typeof __VLS_components.vTextarea, typeof __VLS_components.VTextarea, typeof __VLS_components.vTextarea, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ modelValue: ((__VLS_ctx.form.message)), label: ("Message"), rules: (([__VLS_ctx.rules.required])), required: (true), }));
    const __VLS_28 = __VLS_27({ modelValue: ((__VLS_ctx.form.message)), label: ("Message"), rules: (([__VLS_ctx.rules.required])), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ type: ("submit"), disabled: ((!__VLS_ctx.valid)), }));
    const __VLS_34 = __VLS_33({ type: ("submit"), disabled: ((!__VLS_ctx.valid)), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    __VLS_nonNullable(__VLS_37.slots).default;
    const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.VDivider;
    /** @type { [typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{ class: ("my-4") }, }));
    const __VLS_40 = __VLS_39({ ...{ class: ("my-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((__VLS_ctx.mailtoLink)), });
    (__VLS_ctx.emailAddress);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['my-4'];
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
