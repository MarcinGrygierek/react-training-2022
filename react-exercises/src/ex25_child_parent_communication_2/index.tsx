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
    switchLight: () => void;
}

const Switch = ({isOn, switchLight}: SwitchProps) => {
    return <button onClick={switchLight}>
        {isOn ? 'Wyłącz' : 'Włącz'}
    </button>
}

const Ex25 = () => {
    const [isOn, setOn] = useState<boolean>(false);

    const toggleLight = () => {
        setOn(prevOn => !prevOn);
    }

    return <>
        <LightBulb isOn={isOn} />
        <Switch isOn={isOn} switchLight={toggleLight} />
    </>

}

export {Ex25}