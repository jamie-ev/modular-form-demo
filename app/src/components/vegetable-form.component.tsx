import Button from '@mui/material/Button';
import {
  ExpandableInputGroup,
  FormData,
  FormProvider,
} from '@modular-form-demo/form-components';
import {
  VegetableFormData,
  VegetableRadioConfig,
} from '../config/vegetable-radio.config.ts';

export const VegetableForm = ({
  defaultValues,
  onSubmit,
}: {
  defaultValues: VegetableFormData;
  onSubmit: (data: FormData) => void;
}) => (
  <FormProvider
    defaultValues={defaultValues}
    onSubmit={(data: FormData) => onSubmit(data)}
  >
    {VegetableRadioConfig.map((item) => (
      <ExpandableInputGroup
        key={item.name}
        label={item.label}
        name={item.name}
        responses={item.responses}
      />
    ))}
    <Button type="submit" variant="contained" style={{ marginTop: '10px' }}>
      Submit
    </Button>
  </FormProvider>
);
