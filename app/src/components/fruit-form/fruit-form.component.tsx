import {
  FruitFormData,
  FruitRadioConfig,
} from '../../config/fruit-radio.config.ts';
import Button from '@mui/material/Button';
import {
  ExpandableInputGroup,
  FormData,
  FormProvider,
} from '@modular-form-demo/form-components';

export const FruitForm = ({
  defaultValues,
  onSubmit,
}: {
  defaultValues: FruitFormData;
  onSubmit: (data: FormData) => void;
}) => (
  <FormProvider
    defaultValues={defaultValues}
    onSubmit={(data: FormData) => onSubmit(data)}
  >
    {FruitRadioConfig.map((item) => (
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
