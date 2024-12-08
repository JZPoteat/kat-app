declare const _default: import("vue").DefineComponent<{}, {
    form: import("vue").Ref<{
        email: string;
        message: string;
    }, {
        email: string;
        message: string;
    } | {
        email: string;
        message: string;
    }>;
    valid: import("vue").Ref<boolean, boolean>;
    emailAddress: string;
    mailtoLink: string;
    rules: {
        required: (value: string) => true | "Required.";
        email: (value: string) => true | "Invalid email.";
    };
    submitForm: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}>;
export default _default;
