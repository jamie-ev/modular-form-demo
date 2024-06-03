// @ts-ignore 
import { FormProvider, RadioInputGroup } from '@modular-form-demo/form-components';
import Button from "@mui/material/Button";

type TestFormData = {
  test: string;
};

export const FruitForm = () => (
  <div>Fruits!
    <FormProvider defaultValues={{test: 'test value 2'}} onSubmit={(data: TestFormData) => console.log(data)}>
      <RadioInputGroup label="question 1" name="test"/>
      <Button type="submit">Submit</Button>
    </FormProvider>
  </div>
);