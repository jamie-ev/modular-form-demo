import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CircularProgress } from '@mui/material';
import { FruitPage } from './pages/fruit-page/fruit-page.component.tsx';
import { VegetablePage } from './pages/vegetable-page/vegetable-page.component.tsx';
import { BasePage } from './pages/base-page.component';
import { REPO_URL } from './config/constants.ts';

function App() {
  return (
    <>
      <Suspense fallback={<CircularProgress />}>
        <BrowserRouter>
          <BasePage>
            <Routes>
              <Route path={`${REPO_URL}/fruits`} element={<FruitPage />} />
              <Route path={`${REPO_URL}/vegetables`} element={<VegetablePage />} />
              <Route path={`${REPO_URL}/*`} element={<Navigate replace to={`${REPO_URL}/fruits`}/>} />
            </Routes>
          </BasePage>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
