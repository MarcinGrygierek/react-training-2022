import { useEffect, useState } from "react";

interface SingleItem {
    id: string;
    volumeInfo: {
        title: string;
        publishedDate: string;
        authors: string[];
    }
}

interface Props {
    bookId: string;
}

const Book = ({bookId}: Props) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [item, setItem] = useState<SingleItem>();
    const getData = async() => {
        setLoading(true);
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
        const data: SingleItem = await response.json();
        setItem(data);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);

    if(loading || !item) return <p>Trwa ładowanie danych...</p>

    return <div>
        <h1>{item.volumeInfo.title}</h1>
        <small>{item.volumeInfo.publishedDate}</small>
        {item.volumeInfo.authors.map(author => <p key={author}>{author}</p>)}
    </div>
}

const Zad52 = () => {
    return <Book bookId={'SETQvQEACAAJ'} />
}

export {Zad52}