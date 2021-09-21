import { useEffect } from "react"

interface Props {
    name: string;
}

const Ex17 = ({name}: Props) => {

    useEffect(() => {
        console.log('Mount');

        return () => {
            console.log('Will unmount')
        }
    }, []);

    useEffect(() => {
        console.log('Updated');
    }, [name]);

    console.log('Render');
    return <h1>{name}</h1>
}

export {Ex17}