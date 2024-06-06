import { RadioGroup as RadioInputGroup } from '@mui/material';
import { RadioInput, RadioInputProps } from './radio-input.component';
import { Controller } from 'react-hook-form';

export interface RadioInputGroupProps {
  name: string;
  control: never;
  responses: RadioInputProps[];
}

export const RadioGroup = ({
  name,
  control,
  responses,
}: RadioInputGroupProps) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => (
      <RadioInputGroup value={value} onChange={onChange}>
        {responses.map((item) => (
          <RadioInput key={item.value} label={item.label} value={item.value} />
        ))}
      </RadioInputGroup>
    )}
  />
);
