import { jsx as _jsx } from "react/jsx-runtime";
import { FormProvider as ReactHookFormProvider, useForm, } from 'react-hook-form';
export const FormProvider = ({ defaultValues, onSubmit, children, }) => {
    const methods = useForm({
        defaultValues,
        mode: 'onSubmit',
        reValidateMode: 'onChange',
    });
    return (_jsx(ReactHookFormProvider, { ...methods, children: _jsx("form", { onSubmit: methods.handleSubmit(onSubmit), children: children }) }));
};
