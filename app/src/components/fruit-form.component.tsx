import {FruitFormData, FruitRadioConfig} from "../config/fruit-radio.config.ts";
import Button from "@mui/material/Button";
// @ts-ignore
import {FormProvider, RadioInputGroup} from "@modular-form-demo/form-components";

export const FruitForm = ({ defaultValues, onSubmit }: { defaultValues: FruitFormData, onSubmit: (data: FruitFormData) => void; }) => (
    <FormProvider defaultValues={defaultValues} onSubmit={(data: FruitFormData) => onSubmit(data)}>
        {FruitRadioConfig.map(item => <RadioInputGroup key={item.name} label={item.label} name={item.name}
                                                       responses={item.responses}/>)}
        <Button type="submit" variant="contained" style={{ "marginTop": "10px" }}>Submit</Button>
    </FormProvider>
);