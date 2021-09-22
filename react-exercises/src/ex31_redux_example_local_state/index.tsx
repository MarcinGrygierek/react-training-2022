import { useState } from "react"
import { Form } from "./Form"
import { Header } from "./Header"
import { Main } from "./Main"

const Ex31 = () => {
    const [name, setName] = useState<string>('');

    const changeName = (newName: string) => {
        setName(newName);
    }

    return <>
        <Header name={name} />
        <Main name={name} />
        <Form changeName={changeName} name={name} />
    </>
}

export {Ex31}