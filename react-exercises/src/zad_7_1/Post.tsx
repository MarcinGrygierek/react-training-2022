import { useParams } from "react-router"

const Post = () => {
    const {postId} = useParams<{postId: string}>();

    return <div>
        <h1>Post o ID {postId}</h1>
        <p>
            Tutaj znajduje się treść postu o ID {postId}
        </p>
    </div>
}

export { Post }