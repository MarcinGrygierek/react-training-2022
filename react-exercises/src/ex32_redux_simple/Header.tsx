import { useSelector } from "react-redux";
import { RootState } from "./reducers";

const Header = () => {
    const name = useSelector((state: RootState) => state.user.name);
    return <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 20,
        background: '#ddd'
    }}>
        <strong>Lorem ipsum</strong>
        <span>{name || 'Nieznajomy'}</span>
    </header>
}

export {Header}