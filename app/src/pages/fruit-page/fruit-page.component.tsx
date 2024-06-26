import { FormData } from '@modular-form-demo/form-components';
import { FruitBackgroundImage } from '../../components/background-image/fruit-background-image.component.tsx';
import { FruitForm } from '../../components/fruit-form/fruit-form.component.tsx';
import { useState } from 'react';
import {
  defaultValues,
  FruitFormData,
} from '../../config/fruit-radio.config.ts';
import { FruitResults } from '../../components/fruit-results/fruit-results.component.tsx';

export const FruitPage = () => {
  const [showForm, setShowForm] = useState<boolean>(true);
  const [results, setResults] = useState<FruitFormData>(defaultValues);

  const handleSubmit = (data: FormData) => {
    setResults(data as FruitFormData);
    setShowForm(false);
  };

  return (
    <>
      <FruitBackgroundImage />
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
          <FruitForm
            defaultValues={results}
            onSubmit={(data: FormData) => handleSubmit(data)}
          />
        )}
        {!showForm && (
          <FruitResults data={results} onUpdate={() => setShowForm(true)} />
        )}
      </section>
    </>
  );
};
