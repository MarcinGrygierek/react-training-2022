interface Props {
    name: string;
}

const UserInfo = ({name}: Props) => {
    return <div>
        Cześć, jestem {name || 'Nieznajomy'}
    </div>
}

export {UserInfo}