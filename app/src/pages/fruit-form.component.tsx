// @ts-ignore 
import { FormProvider, RadioInputGroup } from '@modular-form-demo/form-components';
import Button from "@mui/material/Button";
import {defaultValues, FruitFormData, FruitRadioConfig} from "../config/fruit-radio.config.ts";
import {FruitBackgroundImage} from "../components/fruit-background-image.component.tsx";

export const FruitForm = () => (
    <>
      <FruitBackgroundImage/>
      <section style={{backgroundColor: "#3f4746", padding: "25px", maxHeight: "65vh", overflowY: "auto" }}>
      <FormProvider defaultValues={defaultValues} onSubmit={(data: FruitFormData) => console.log(data)}>
        {FruitRadioConfig.map(item => <RadioInputGroup key={item.name} label={item.label} name={item.name}
                                                       responses={item.responses}/>)}
        <Button type="submit" variant="contained" style={{ "marginTop": "10px" }}>Submit</Button>
      </FormProvider>
      </section>
    </>
);