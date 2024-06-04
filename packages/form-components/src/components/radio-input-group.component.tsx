import {FormLabel, RadioGroup} from "@mui/material";
import {Controller} from "react-hook-form";
import {RadioInput, RadioInputProps} from "./radio-input.component";

export type RadioInputGroupProps = {
  label: string;
  name: string;
  control: never;
  responses: RadioInputProps[];
}

export const RadioInputGroup = ({ label, name, control, responses }: RadioInputGroupProps ) => (
  <>
    <FormLabel component="legend">{label}</FormLabel>
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <RadioGroup value={value} onChange={onChange}>
          {responses.map(item => <RadioInput key={item.value} label={item.label} value={item.value} />)}
        </RadioGroup>
      )}
    />
  </>
);