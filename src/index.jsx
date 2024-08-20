import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Clock from './clock/Clock';

const viteRoot = document.getElementById('vite-root');

if (viteRoot) createRoot(viteRoot).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/clock' element={<Clock />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
