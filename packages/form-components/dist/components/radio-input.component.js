import { jsx as _jsx } from "react/jsx-runtime";
import Radio from '@mui/material/Radio';
import { FormControlLabel } from '@mui/material';
export const RadioInput = ({ label, value, labelPlacement = 'end', size = 'medium', }) => (_jsx(FormControlLabel, { value: value, label: label, labelPlacement: labelPlacement, control: _jsx(Radio, { size: size }) }));
