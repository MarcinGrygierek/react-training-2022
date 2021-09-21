import { ChangeEvent, FormEvent, useState } from "react"

const Ex27 = () => {
    const [name, setName] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Name', name)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return <form onSubmit={handleSubmit}>
        <input type='text' name='name' value={name} onChange={handleChange} />
        <input type='submit' value='Send' />
    </form>
}

export {Ex27}