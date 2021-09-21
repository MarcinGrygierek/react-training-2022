import { useEffect, useState } from "react"

interface Props {
    initialCounter: number
}

const Zad23 = ({initialCounter}: Props) => {
    const [counter, setCounter] = useState<number>(initialCounter);

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

export {Zad23}