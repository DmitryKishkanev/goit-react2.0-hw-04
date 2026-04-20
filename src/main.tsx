import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // импорт стилей нормализации из библиотеки  modern-normalize
import App from '@/components/App/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
