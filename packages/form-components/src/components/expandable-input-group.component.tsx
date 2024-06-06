import { Button, FormLabel } from '@mui/material';
import { RadioGroup, RadioInputGroupProps } from './radio-group.component';
import { useState } from 'react';

export interface ExpandableInputGroupProps extends RadioInputGroupProps {
  label: string;
}

export const ExpandableInputGroup = ({
  label,
  name,
  responses,
}: ExpandableInputGroupProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section style={{ width: '420px' }}>
      <Button
        onClick={() => setIsOpen((open) => !open)}
        style={{ width: '100%' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            padding: '0 10px 0 15px',
            backgroundColor: 'white',
          }}
        >
          <FormLabel component="legend" style={{ color: '#1565c0' }}>
            {label}
          </FormLabel>
          <span style={{ fontSize: '1.5rem' }}>{isOpen ? '-' : '+'}</span>
        </div>
      </Button>
      <div style={{ display: isOpen ? 'block' : 'none' }}>
        <RadioGroup name={name} responses={responses} />
      </div>
    </section>
  );
};
