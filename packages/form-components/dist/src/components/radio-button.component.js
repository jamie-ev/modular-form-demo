import { jsx as _jsx } from "react/jsx-runtime";
import Radio from '@mui/material/Radio';
export const RadioButton = ({ id, name, label, value }) => (_jsx(Radio, { value: value, name: name, inputProps: { id: id, 'aria-label': label } }));
