import { ChangeEvent, FormEvent, useState } from "react"

interface FormData {
    num1: string;
    num2: string;
}

const Zad42 = () => {
    const [values, setValues] = useState<FormData>({
        num1: '',
        num2: ''
    })
    const [result, setResult] = useState<string>();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(values);

        if(!values.num1 || !values.num2) {
            setResult('Jedna lub obie wartości są puste!');
            return;
        }

        const n1 = Number(values.num1);
        const n2 = Number(values.num2);

        const sum = n1 + n2;

        setResult(sum.toString());
    }

    return <form onSubmit={handleSubmit}>
        <input type='number' name="num1" value={values.num1} onChange={handleChange} required />
        <input type='number' name="num2" value={values.num2} onChange={handleChange} />
        <input type="submit" value="Send" />
        {result}
    </form>
}

export {Zad42}