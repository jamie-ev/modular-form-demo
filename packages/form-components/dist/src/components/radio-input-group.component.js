import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, FormLabel, RadioGroup } from "@mui/material";
import { Controller } from "react-hook-form";
import { RadioInput } from "./radio-input.component";
import { useState } from "react";
export const RadioInputGroup = ({ label, name, control, responses }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (_jsxs("section", { style: { width: '420px' }, children: [_jsx(Button, { onClick: () => setIsOpen(open => !open), style: { width: '100%' }, children: _jsxs("div", { style: { display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center", width: '100%', padding: '0 10px 0 15px', backgroundColor: "white" }, children: [_jsx(FormLabel, { component: "legend", style: { color: '#1565c0' }, children: label }), _jsx("span", { style: { fontSize: '1.5rem' }, children: isOpen ? '-' : '+' })] }) }), _jsx("div", { style: { display: isOpen ? 'block' : 'none' }, children: _jsx(Controller, { name: name, control: control, render: ({ field: { onChange, value } }) => (_jsx(RadioGroup, { value: value, onChange: onChange, children: responses.map(item => _jsx(RadioInput, { label: item.label, value: item.value }, item.value)) })) }) })] }));
};
