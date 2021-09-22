import { ChangeEvent, FormEvent, useState } from "react"

const Zad41 = () => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(value);
    }

    return <form onSubmit={handleSubmit}>
        <input type='text' name='value' value={value} onChange={handleChange} />
    </form>
}

export { Zad41 }