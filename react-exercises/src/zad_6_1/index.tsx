import { ChangeEvent, FormEvent, useState } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
import { setName } from "./features/user/user-slice";
import store, { RootState } from "./store"

const UserForm = () => {
    const dispatch = useDispatch();
    const {name} = useSelector((state: RootState) => state.user);
    const [userName, setUserName] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setName(userName));
    }

    return <form onSubmit={handleSubmit}>
        <input type='text' name='name' value={userName} onChange={handleChange} />
        {name}
    </form>
}

const Zad61 = () => {
    return <Provider store={store}>
        <UserForm />
    </Provider>
}

export {Zad61}