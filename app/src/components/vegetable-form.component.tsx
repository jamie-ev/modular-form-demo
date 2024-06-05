import Button from "@mui/material/Button";
// @ts-ignore
import {FormProvider, RadioInputGroup} from "@modular-form-demo/form-components";
import {VegetableFormData, VegetableRadioConfig} from "../config/vegetable-radio.config.ts";

export const VegetableForm = ({ defaultValues, onSubmit }: { defaultValues: VegetableFormData, onSubmit: (data: VegetableFormData) => void; }) => (
    <FormProvider defaultValues={defaultValues} onSubmit={(data: VegetableFormData) => onSubmit(data)}>
        {VegetableRadioConfig.map(item => <RadioInputGroup key={item.name} label={item.label} name={item.name}
                                                       responses={item.responses}/>)}
        <Button type="submit" variant="contained" style={{ "marginTop": "10px" }}>Submit</Button>
    </FormProvider>
);