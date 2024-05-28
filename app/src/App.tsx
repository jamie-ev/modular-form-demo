import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CircularProgress } from '@mui/material';
import { FruitForm } from './pages/fruit-form.component';
import { VegetableForm } from './pages/vegetable-form.component';
import { BasePage } from './pages/base-page.component';

function App() {
  return (
    <>
      <Suspense fallback={<CircularProgress/>}>
        <BrowserRouter>
          <BasePage>
            <Routes>
              <Route path="/fruits" element={<FruitForm />} />
              <Route path="/vegetables" element={<VegetableForm />} />
              <Route path="/*" element={<Navigate replace to="/fruits" />} />
            </Routes>
          </BasePage>
        </BrowserRouter>
      </Suspense>
    </>
  )
};

export default App;
