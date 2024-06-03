import Radio from '@mui/material/Radio';
import {FormControlLabel} from "@mui/material";

export type RadioInputProps = {
  label: string;
  value: string;
  labelPlacement?: "end" | "start" | "top" | "bottom" | undefined;
  size?: "small" | "medium";
}

export const RadioInput = ({ label, value, labelPlacement = 'end', size = 'medium' }: RadioInputProps) => (
  <FormControlLabel value={value} label={label} labelPlacement={labelPlacement} control={<Radio size={size} />}/>
);