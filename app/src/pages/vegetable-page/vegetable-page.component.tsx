import { useState } from 'react';
import { FormData } from '@modular-form-demo/form-components';
import {
  defaultValues,
  VegetableFormData,
} from '../../config/vegetable-radio.config.ts';
import { VegetableForm } from '../../components/vegetable-form/vegetable-form.component.tsx';
import { VegetableResults } from '../../components/vegetable-results/vegetable-results.component.tsx';
import { VegetableBackgroundImage } from '../../components/background-image/vegetable-background-image.component.tsx';

export const VegetablePage = () => {
  const [showForm, setShowForm] = useState<boolean>(true);
  const [results, setResults] = useState<VegetableFormData>(defaultValues);

  const handleSubmit = (data: FormData) => {
    setResults(data as VegetableFormData);
    setShowForm(false);
  };

  return (
    <>
      <VegetableBackgroundImage />
      <section
        style={{
          backgroundColor: '#3f4746',
          padding: '25px',
          maxHeight: '65vh',
          width: '420px',
          overflowY: 'auto',
        }}
      >
        {showForm && (
          <VegetableForm
            defaultValues={results}
            onSubmit={(data: FormData) => handleSubmit(data)}
          />
        )}
        {!showForm && (
          <VegetableResults data={results} onUpdate={() => setShowForm(true)} />
        )}
      </section>
    </>
  );
};
