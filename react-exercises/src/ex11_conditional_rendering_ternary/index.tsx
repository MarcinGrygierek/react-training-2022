interface Props {
    isOn: boolean;
}

const Ex11Ternary = ({isOn}: Props) => {
    return <div>{isOn ? 'Światło jest zapalone' : 'Światło jest wyłączone'}</div>
}

export { Ex11Ternary }