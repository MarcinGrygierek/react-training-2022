import { useState } from "react"

const Ex20 = () => {
    const [counter, setCounter] = useState<number>(0);

    const handleClick = () => {
        setCounter(prevCounter => prevCounter + 1);
    }

    return <button onClick={handleClick}>{counter}</button>
}

export {Ex20}