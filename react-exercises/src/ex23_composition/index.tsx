interface Props {
    left: React.ReactNode;
    center: React.ReactNode;
    right: React.ReactNode;
}

const Header = ({left, center, right}: Props) => {
    return <header style={{
        display: 'flex',
        justifyContent: 'space-between'
    }}>
        <div>{left}</div>
        <div>{center}</div>
        <div>{right}</div>
    </header>
}

const Ex23 = () => {
    return <Header 
        left={<button>Open menu</button>}
        center={<h1>Home page</h1>}
        right={<button>Log out</button>}
    />;
}

export {Ex23}