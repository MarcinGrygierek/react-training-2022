import { useState } from "react"
import { LikesCounter } from "./LikesCounter";
import { Posts } from "./Posts";


const Zad33 = () => {
    const [likesCount, setLikesCount] = useState<number>(0);

    const toggleLike = (add: boolean) => {
        if(add) {
            setLikesCount(prevLikes => prevLikes + 1);
        } else {
            setLikesCount(prevLikes => prevLikes - 1);
        }
    }

    return <>
        <LikesCounter count={likesCount} />
        <Posts toggleLike={toggleLike} />
    </>
}

export {Zad33}