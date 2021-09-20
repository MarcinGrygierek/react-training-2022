// Operacja arytmetyczna w wyrażeniu
// const Foo = () => {
//     return <div>{10 + 20}</div>
// }

// Wyrażenie korzystajace ze zmiennych/stałych
// const Foo = () => {
//     const a = 10;
//     const b = 30;
//     return <div>{a + b}</div>
// }

// Wyrażenie korzystające z funkcji
// const Foo = () => {
//     const a = 10;

//     const bar = (val: number) => {
//         return val * val;
//     }

//     return <div>{a + bar(10)}</div>
// }

// Przypisanie elementu do stałej
const Foo = () => {
    const a = 10;
    const b = 90;
    const element = <div>{a + b}</div>
    return element;
}

export { Foo }