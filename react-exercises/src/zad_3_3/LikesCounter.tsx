interface LikesCounterProps {
    count: number
}

const LikesCounter = ({count}: LikesCounterProps) => {
    return <h1>Ilość likeów: {count}</h1>
}

export { LikesCounter }