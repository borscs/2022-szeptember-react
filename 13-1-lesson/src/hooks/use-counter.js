import {useEffect, useState} from 'react';
const useCounter = (input = 1) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + input);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return counter
};

export default useCounter;
