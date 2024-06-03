import {FormLabel, RadioGroup} from "@mui/material";
import {Controller} from "react-hook-form";
import {RadioInput} from "./radio-input.component";

export type RadioInputGroupProps = {
  label: string;
  name: string;
  control: never;
}

export const RadioInputGroup = ({ label, name, control }: RadioInputGroupProps ) => (
  <>
    <FormLabel component="legend">{label}</FormLabel>
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <RadioGroup value={value} onChange={onChange}>
          <RadioInput label="test" value="test value" />
          <RadioInput label="test 2" value="test value 2" />
        </RadioGroup>
      )}
    />
  </>
);