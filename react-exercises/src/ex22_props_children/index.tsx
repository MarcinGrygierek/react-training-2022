interface Props {
    children: React.ReactNode;
}

const Container = ({children}: Props) => {
    return <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: 20
    }}>
        <header>
            <h1>Lorem ipsum</h1>
        </header>
        <p>
            {children}
        </p>
    </div>
}

const Ex22 = () => {
    return <Container>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam debitis nam provident qui laborum magni officia temporibus vero libero, tempore consequuntur minus, ut eos eum neque porro ducimus et?
    <button>Click me</button>
        <Container>
            Nested container
        </Container>
    </Container>
}

export {Ex22}