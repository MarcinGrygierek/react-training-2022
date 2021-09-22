import { useSelector } from "react-redux"
import { RootState } from "./store"

const LikesCounter = () => {
    const {count} = useSelector((state: RootState) => state.likes);
    return <h1>Ilość likeów: {count}</h1>
}

export { LikesCounter }