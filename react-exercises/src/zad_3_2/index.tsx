import { useState } from "react"

interface CounterHeaderProps {
    counter: number
}

const CounterHeader = ({counter}: CounterHeaderProps) => {
    return <h1>{counter}</h1>

}

interface CounterButtonProps {
    increment: () => void;
}

const CounterButton = ({increment}: CounterButtonProps) => {
    return  <button onClick={increment}>Zwiększ +1</button>;
}

const Zad32 = () => {
    const [counter, setCounter] = useState<number>(0);

    const increment = () => {
        setCounter(prevCounter => prevCounter + 1);
    }

    return <>
        <CounterHeader counter={counter} />
        <CounterButton increment={increment} />
    </>
}

export {Zad32}