import { FormEvent } from "react"

const Ex26 = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(e);
    }

    return <form onSubmit={handleSubmit}>
        <input type='text' name='lorem' />
        <input type='submit' value='Send' />
    </form>
}

export {Ex26}