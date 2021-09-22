import { UserInfo } from "./UserInfo"

interface Props {
    name: string;
}

const Main = ({name}: Props) => {
    return <div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facilis, voluptatem quaerat eum alias nulla perferendis modi? Sint nam exercitationem omnis in! Expedita quidem nam obcaecati natus facilis perferendis quam.
        </p>
        <UserInfo name={name} />
    </div>
}

export {Main}