import { useEffect, useState } from "react"

interface Props {
    initialCounter: number
}

const Zad24 = ({initialCounter}: Props) => {
    const [counter, setCounter] = useState<number>(initialCounter);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        if(counter % 5 === 0) console.log(`Wartość licznika ${counter}`)
    }, [counter])

    return <h1>{counter}</h1>
}

export {Zad24}