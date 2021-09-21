import { useState } from "react"

interface Props {
    defaultName: string
}

const Ex15 = ({defaultName}: Props) => {
    const [name, setName] = useState<string>(defaultName);
    return <h1>{name}</h1>
}

export { Ex15 }