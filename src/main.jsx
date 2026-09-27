import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Counter from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Counter startAt={20} storageKey="counter1" />
        <Counter startAt={100} storageKey="counter2" />
    </StrictMode>
);
