interface Props {
    name: string;
}

const Header = ({name}: Props) => {
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