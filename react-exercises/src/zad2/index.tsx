const Zad2 = () => {
    const a: number = Number(window.prompt('Podaj pierwszą wartość'));
    const b: number = Number(window.prompt('Podaj drugą wartość'));

    if(Number.isNaN(a) || Number.isNaN(b)) {
        return <h1>Podałeś niepoprawne wartości</h1>
    }

    return <div>{a + b}</div>
}

export { Zad2 }