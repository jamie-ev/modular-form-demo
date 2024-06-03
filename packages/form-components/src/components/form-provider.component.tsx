import {FormProvider as ReactHookFormProvider, useForm} from "react-hook-form";
import React from "react";

export type FormProviderProps = {
  defaultValues: { [key: string]: string | number };
  onSubmit: () => void;
  children: React.ReactNode;
}

export const FormProvider = ({ defaultValues, onSubmit, children }: FormProviderProps) => {
  const methods = useForm({ defaultValues, mode: 'onSubmit', reValidateMode: 'onChange' });
  return (
    <ReactHookFormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </ReactHookFormProvider>
  );
}