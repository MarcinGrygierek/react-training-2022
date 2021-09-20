interface Info {
    firstName: string;
    lastName: string;
    experience: string[];
}

const Card = () => {
    const info: Info = {
        firstName: 'Marcin',
        lastName: 'Grygierek',
        experience: ['JS', 'TS', 'HTML', 'React']
    }

    return <div style={{
        border:'1px solid #333',
        borderRadius: '10px',
        padding: 20
    }}>
        <h1>{info.firstName} {info.lastName}</h1>
        <ul>
            {info.experience.map(el => <li key={el}>{el}</li>)}
        </ul>
    </div>
}

export {Card}