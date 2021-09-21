import { useEffect, useState } from "react"

const Zad22 = () => {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return <h1>{counter}</h1>
}

export {Zad22}