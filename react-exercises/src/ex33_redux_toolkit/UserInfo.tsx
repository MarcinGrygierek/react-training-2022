import { useSelector } from "react-redux"
import { RootState } from "./store";

const UserInfo = () => {
    const { name, age}  = useSelector((state: RootState) => state.user);
    const { address } = useSelector((state: RootState) => state.ip);
    return <div>
        <p>Cześć, jestem {name || 'Nieznajomy'}, mam {age} lat</p>
        <p>Mój adres IP to {address}</p>
    </div>
}

export {UserInfo}