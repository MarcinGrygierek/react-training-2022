import { useState } from "react";

interface PostProps {
    text: string;
    toggleLike: (add: boolean) => void;
}

const Post = ({text, toggleLike}: PostProps) => {
    const [isLiked, setLiked] = useState<boolean>(false);

    const handleLikeButton = () => {
        toggleLike(!isLiked);
        setLiked(prevLiked => !prevLiked);
    }

    return <div>
        <p>{text}</p>
        <button onClick={handleLikeButton}>{isLiked ? 'Odlajkuj' : 'Polajkuj'}</button>
    </div>
}

export { Post }