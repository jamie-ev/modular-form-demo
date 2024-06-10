import { RadioInputProps } from "./radio-input.component";
export type RadioInputGroupProps = {
    label: string;
    name: string;
    control: never;
    responses: RadioInputProps[];
};
export declare const RadioInputGroup: ({ label, name, control, responses }: RadioInputGroupProps) => import("react/jsx-runtime").JSX.Element;
