import { useState } from "react"

interface LightBulbProps {
    isOn: boolean;
}

const LightBulb = ({isOn}: LightBulbProps) => {
    return <div style={{
        width: 200,
        height: 200,
        borderRadius: '50%',
        backgroundColor: isOn ? 'gold' : 'black'
    }}></div>
}

interface SwitchProps {
    isOn: boolean;
    switchLight: (isOn: boolean) => void;
}

const Switch = ({isOn, switchLight}: SwitchProps) => {
    const handleClick = () => {
        switchLight(!isOn);
    }

    return <button onClick={handleClick}>
        {isOn ? 'Wyłącz' : 'Włącz'}
    </button>
}

const Ex24 = () => {
    const [isOn, setOn] = useState<boolean>(false);
    return <>
        <LightBulb isOn={isOn} />
        <Switch isOn={isOn} switchLight={setOn} />
    </>

}

export {Ex24}