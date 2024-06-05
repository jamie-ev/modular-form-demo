import {Button, FormLabel, RadioGroup} from "@mui/material";
import {Controller} from "react-hook-form";
import {RadioInput, RadioInputProps} from "./radio-input.component";
import {useState} from "react";

export type RadioInputGroupProps = {
  label: string;
  name: string;
  control: never;
  responses: RadioInputProps[];
}

export const RadioInputGroup = ({ label, name, control, responses }: RadioInputGroupProps ) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section style={{ width: '420px' }}>
      <Button onClick={() => setIsOpen(open => !open)} style={{ width: '100%' }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center", width: '100%', padding: '0 10px 0 15px', backgroundColor: "white" }}>
          <FormLabel component="legend" style={{ color: '#1565c0' }}>{label}</FormLabel>
          <span style={{ fontSize: '1.5rem' }}>{isOpen ? '-' : '+'}</span>
        </div>
      </Button>
      <div style={{ display: isOpen ? 'block' : 'none'}}>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <RadioGroup value={value} onChange={onChange}>
              {responses.map(item => <RadioInput key={item.value} label={item.label} value={item.value} />)}
            </RadioGroup>
          )}
        />
      </div>
    </section>
  );
};