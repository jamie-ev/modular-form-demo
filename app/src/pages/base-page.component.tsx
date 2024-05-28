import * as React from 'react'
import { NavBar } from '../components/nav-bar.component';

export const BasePage = ({ children }: { children: React.ReactNode } ) => (
  <>
    <NavBar />
    {children}
  </>
);