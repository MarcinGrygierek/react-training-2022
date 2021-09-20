// const Ex5 = () => {
//     const elements: string[] = [
//         'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'aaaaa', 'bbb'
//     ]

//     return <ul>
//         {elements.map(el => <li key={el}>Element: {el}</li>)}
//     </ul>
// }

interface Car {
    id: number;
    model: string;
    hp: number;
    brand: string;
}

const Ex5 = () => {
    const cars: Car[] = [
        {id: 1, brand: 'Opel', model: 'Corsa', hp: 80},
        {id: 2, brand: 'Fiat', model: 'Punto', hp: 70},
        {id: 3, brand: 'Renault', model: 'Clio', hp: 60},
    ]

    return <ul>
        {cars.map(el => <li key={el.id}>{el.brand} {el.model} <strong>{el.hp}</strong></li>)}
    </ul>
}

export { Ex5 }