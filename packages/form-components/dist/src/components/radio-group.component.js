import { jsx as _jsx } from "react/jsx-runtime";
import { RadioGroup as RadioInputGroup } from '@mui/material';
import { RadioInput } from './radio-input.component';
import { Controller } from 'react-hook-form';
export const RadioGroup = ({ name, responses, }) => (_jsx(Controller, { name: name, render: ({ field: { onChange, value } }) => (_jsx(RadioInputGroup, { value: value, onChange: onChange, children: responses.map((item) => (_jsx(RadioInput, { label: item.label, value: item.value }, item.value))) })) }));
