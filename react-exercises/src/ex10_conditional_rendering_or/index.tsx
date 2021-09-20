interface Props {
    name?: string;
}

const Ex10Or = ({name}: Props) => {

    return <div>{name || 'Anonimowy użytkownik'}</div>
}

export { Ex10Or } 