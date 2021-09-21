import { MouseEventHandler, useState } from "react"

const Zad31 = () => {
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        setX(e.clientX);
        setY(e.clientY);
    }

    return <div 
        onMouseMove={e => handleMouse(e)}
        style={{
        width: 200,
        height: 200,
        backgroundColor: '#ccc'
    }}>
        <p>{x}</p>
        <p>{y}</p>
    </div>
}

export {Zad31}