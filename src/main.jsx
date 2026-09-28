import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Timer from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <Counter startAt={0} /> */}
        <Timer />
        {/* <Counter startAt={100} storageKey="counter2" /> */}
    </StrictMode>
);
