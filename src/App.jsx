import { useEffect, useState } from 'react';

import './App.css';

function Counter({ startAt, storageKey }) {
    const [count, setCount] = useState(() => {
        const savedCounter = localStorage.getItem(storageKey);
        return savedCounter !== null ? Number(savedCounter) : startAt;
    });

    useEffect(() => {
        localStorage.setItem(storageKey, count);
    }, [storageKey, count]);

    return (
        <>
            <div>
                <p>Clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click Me</button>
            </div>
        </>
    );
}

export default Counter;
