import { Post } from "./Post"

interface SinglePost {
    id: number;
    text: string;
}

interface PostsProps {
    toggleLike: (add: boolean) => void;
}

const Posts = ({toggleLike}: PostsProps) => {
    const posts: SinglePost[] = [{
        id: 1,
        text: 'lorem'
    }, {
        id: 2,
        text: 'Ipsum'
    }, {
        id: 3,
        text: 'dolor'
    }]

    return <div>
        {posts.map(post => <Post text={post.text} key={post.id} toggleLike={toggleLike} />)}
    </div>
}

export {Posts}