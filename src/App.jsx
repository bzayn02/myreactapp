import { useEffect, useState } from 'react';

import './App.css';

// function Counter({ startAt }) {
//     const [count, setCount] = useState(() => {
//         const storedCounter = localStorage.getItem('count');
//         return storedCounter !== null ? Number(storedCounter) : startAt;
//     });

//     useEffect(() => {
//         localStorage.setItem('count', count);
//     }, [count]);

//     return (
//         <>
//             <div>
//                 <p>Clicked {count} times</p>
//                 <button onClick={() => setCount(count + 1)}>Click Me</button>
//             </div>
//         </>
//     );
// }
function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setSeconds((s) => s + 1);
        }, 1000);

        return () => clearInterval(id);
    }, []);
    return <p>{seconds} seconds</p>;
}

export default Timer;
