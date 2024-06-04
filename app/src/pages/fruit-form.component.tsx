// @ts-ignore 
import { FormProvider, RadioInputGroup } from '@modular-form-demo/form-components';
import Button from "@mui/material/Button";
import {defaultValues, FruitFormData, FruitRadioConfig} from "../config/fruit-radio.config.ts";

export const FruitForm = () => (
  <div>Fruits!
    <FormProvider defaultValues={defaultValues} onSubmit={(data: FruitFormData) => console.log(data)}>
      {FruitRadioConfig.map(item => <RadioInputGroup key={item.name} label={item.label} name={item.name} responses={item.responses} />)}
      <Button type="submit">Submit</Button>
    </FormProvider>
  </div>
);