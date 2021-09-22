import { getColorForType, getDefaultPadding } from "./utils"

interface Props {
    type: 'error' | 'success';
    text: string;
}

const Alert = ({type, text}: Props) => {
    return <div className={`alert alert-${type}`} style={{
        padding: getDefaultPadding(),
        backgroundColor: getColorForType(type)
    }}>
        {text}
    </div>
}

export { Alert }