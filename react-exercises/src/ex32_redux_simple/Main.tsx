import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getMyIp } from "./actions/ip";
import { UserInfo } from "./UserInfo"


const Main = () => {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getMyIp());
    }, []);

    return <div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facilis, voluptatem quaerat eum alias nulla perferendis modi? Sint nam exercitationem omnis in! Expedita quidem nam obcaecati natus facilis perferendis quam.
        </p>
        <UserInfo />
    </div>
}

export {Main}