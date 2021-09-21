import { ChangeEvent, FormEvent, useState } from "react"

interface FormData {
    name: string;
    lastName: string;
    age: number;
}

const Ex28 = () => {
    const [values, setValues] = useState<FormData>({
        name: '',
        lastName: '',
        age: 0
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Name', values)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }


    return <form onSubmit={handleSubmit}>
        <input type='text' name='name' value={values.name} onChange={handleChange} />
        <input type='text' name='lastName' value={values.lastName} onChange={handleChange} />
        <input type='number' name='age' value={values.age} onChange={handleChange} />
        <input type='submit' value='Send' />
    </form>
}

export {Ex28}