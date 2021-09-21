// interface Info {
//     firstName: string;
//     lastName: string;
//     experience: string[];
// }

// interface Props {
//     item: Info
// }

// const Zad89 = ({item}: Props) => {
//     return <div style={{
//         border:'1px solid #333',
//         borderRadius: '10px',
//         padding: 20
//     }}>
//         <h1>{item.firstName} {item.lastName}</h1>
//         <ul>
//             {item.experience.map(el => <li key={el}>{el}</li>)}
//         </ul>
//     </div>
// }


interface Props {
    firstName: string;
    lastName: string;
    experience: string[];
}

const Zad89 = ({firstName, lastName, experience}: Props) => {

    if(!firstName) return <p>Podałeś niekompletne dane</p>

    return <div style={{
        border:'1px solid #333',
        borderRadius: '10px',
        padding: 20
    }}>
        <h1>{firstName} {lastName}</h1>
        <ul>
            {experience.map(el => <li key={el}>{el}</li>)}
        </ul>
    </div>
}

export {Zad89}