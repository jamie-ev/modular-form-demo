import React from 'react';
export type FormData = {
    [key: string]: string | number;
};
export type FormProviderProps = {
    defaultValues: FormData;
    onSubmit: (data: FormData) => void;
    children: React.ReactNode;
};
export declare const FormProvider: ({ defaultValues, onSubmit, children, }: FormProviderProps) => import("react/jsx-runtime").JSX.Element;
