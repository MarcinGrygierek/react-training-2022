import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleLike } from "./features/likes/likes-slice";

interface PostProps {
    text: string;
}

const Post = ({text}: PostProps) => {
    const dispatch = useDispatch();
    const [isLiked, setLiked] = useState<boolean>(false);

    const handleLikeButton = () => {
        dispatch(toggleLike(!isLiked));
        setLiked(prevLiked => !prevLiked);
    }

    return <div>
        <p>{text}</p>
        <button onClick={handleLikeButton}>{isLiked ? 'Odlajkuj' : 'Polajkuj'}</button>
    </div>
}

export { Post }