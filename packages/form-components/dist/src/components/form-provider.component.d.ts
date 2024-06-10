import React from 'react';
export type FormProviderProps = {
    defaultValues: {
        [key: string]: string | number;
    };
    onSubmit: (data: {
        [key: string]: string | number;
    }) => void;
    children: React.ReactNode;
};
export declare const FormProvider: ({ defaultValues, onSubmit, children, }: FormProviderProps) => import("react/jsx-runtime").JSX.Element;
