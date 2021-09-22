import { ChangeEvent, FormEvent, useState } from "react"

interface Props {
    name: string;
    changeName: (newName: string) => void;
}

const Form = ({changeName, name}: Props) => {
    const [newName, setNewName] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        changeName(newName);
    }

    return <form onSubmit={handleSubmit}>
        <p>Podaj swoje imię</p>
        <input type='text' name='name' placeholder={name} value={newName} onChange={handleChange} />
    </form>
}

export {Form}