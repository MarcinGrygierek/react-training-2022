import { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { clearName, setName } from "./actions/user";
import { RootState } from "./reducers";

const Form = () => {
    const dispatch = useDispatch();
    const name = useSelector((state: RootState) => state.user.name);
    const [newName, setNewName] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setName(newName));
    }

    const handleClick = () => {
        dispatch(clearName());
    }

    return <form onSubmit={handleSubmit}>
        <p>Podaj swoje imię</p>
        <input type='text' name='name' placeholder={name} value={newName} onChange={handleChange} />
        <button type='button' onClick={handleClick}>Clear name</button>
    </form>
}

export {Form}