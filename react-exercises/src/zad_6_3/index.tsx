import { ChangeEvent, FormEvent, useState } from "react"
import { Provider, useDispatch, useSelector } from "react-redux";
import { getBooks } from "./features/books/books-slice";
import store, {RootState} from "./store";

const Books = () => {
    const dispatch = useDispatch();
    const [search, setSearch ] = useState<string>('');
    const {items, loading} = useSelector((state: RootState) => state.books);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       dispatch(getBooks(search));
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type='text' name='search' value={search} onChange={handleChange} />
        </form>
        {loading && <p>Trwa ładowanie danych...</p>}
        <ul>
            {items.map(item => <li key={item.id}>
                <p>{item.volumeInfo.title}</p>
                <small>{item.volumeInfo.publishedDate}</small>
            </li>)}
        </ul>
    </>
}

const Zad63 = () => {
    return <Provider store={store}>
        <Books />
    </Provider>
}

export {Zad63}