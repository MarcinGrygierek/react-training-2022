import { useState } from "react"

const Ex13 = () => {
    const [name, setName] = useState<string>('Marcin');
    return <h1>{name}</h1>
}

export { Ex13 }