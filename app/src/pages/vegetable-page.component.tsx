import {useState} from "react";
import {defaultValues, VegetableFormData} from "../config/vegetable-radio.config.ts";
import {VegetableForm} from "../components/vegetable-form.component.tsx";
import {VegetableResults} from "../components/vegetable-results.component.tsx";
import {VegetableBackgroundImage} from "../components/vegetable-background-image.component.tsx";

export const VegetablePage = () => {
    const [showForm, setShowForm] = useState<boolean>(true);
    const [results, setResults] = useState<VegetableFormData>(defaultValues);

    const handleSubmit = (data: VegetableFormData) => {
        setResults(data);
        setShowForm(false);
    }

    return (
        <>
            <VegetableBackgroundImage />
            <section style={{backgroundColor: "#3f4746", padding: "25px", maxHeight: "65vh", width: '420px', overflowY: "auto"}}>
                {showForm && <VegetableForm defaultValues={results} onSubmit={(data: VegetableFormData) => handleSubmit(data)}/>}
                {!showForm && <VegetableResults data={results} onUpdate={() => setShowForm(true)} />}
            </section>
        </>
    );
};