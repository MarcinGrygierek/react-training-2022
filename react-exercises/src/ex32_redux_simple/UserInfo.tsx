import { useSelector } from "react-redux"
import { RootState } from "./reducers";

const UserInfo = () => {
    const { name, age}  = useSelector((state: RootState) => state.user);
    const { ip } = useSelector((state: RootState) => state.ip);
    return <div>
        <p>Cześć, jestem {name || 'Nieznajomy'}, mam {age} lat</p>
        <p>Mój adres IP to {ip}</p>
    </div>
}

export {UserInfo}