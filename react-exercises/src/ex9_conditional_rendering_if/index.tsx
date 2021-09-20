const Ex9If = () => {
    const age = Number(window.prompt('Podaj swój wiek'));

    if(Number.isNaN(age) || age < 18) return <h1>Jesteś zbyt młody.</h1>

    return <h1>Zapraszam!</h1>
}

export {Ex9If}