import { ChangeEvent, FormEvent, useState } from "react"

interface SingleItem {
    id: string;
    volumeInfo: {
        title: string;
        publishedDate: string;
    }
}

interface BookResponse {
    kind: string;
    totalItems: number;
    items: SingleItem[]
}

const Zad51 = () => {
    const [search, setSearch ] = useState<string>('');
    const [items, setItems] = useState<SingleItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getData = async() => {
        setLoading(true);
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
        const data: BookResponse = await response.json();
        setItems(data.items);
        setLoading(false);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getData();
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

export {Zad51}