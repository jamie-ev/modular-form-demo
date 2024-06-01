import Radio from '@mui/material/Radio';

export type RadioButtonProps = {
  id: string;
  name: string;
  label: string;
  value: string; 
}

export const RadioButton = ({ id, name, label, value }: RadioButtonProps) => (
  <Radio value={value} name={name} inputProps={{ id: id, 'aria-label': label }}/>
);