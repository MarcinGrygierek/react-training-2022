import { Post } from "./Post"

interface SinglePost {
    id: number;
    text: string;
}


const Posts = () => {
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
        {posts.map(post => <Post text={post.text} key={post.id} />)}
    </div>
}

export {Posts}