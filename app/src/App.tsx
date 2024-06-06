import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CircularProgress } from '@mui/material';
import { FruitPage } from './pages/fruit-page.component.tsx';
import { VegetablePage } from './pages/vegetable-page.component.tsx';
import { BasePage } from './pages/base-page.component';

function App() {
  return (
    <>
      <Suspense fallback={<CircularProgress />}>
        <BrowserRouter>
          <BasePage>
            <Routes>
              <Route path="/fruits" element={<FruitPage />} />
              <Route path="/vegetables" element={<VegetablePage />} />
              <Route path="/*" element={<Navigate replace to="/fruits" />} />
            </Routes>
          </BasePage>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
