import { Provider } from "react-redux";
import { LikesCounter } from "./LikesCounter";
import { Posts } from "./Posts";
import store from "./store";


const Zad62 = () => {
    return <Provider store={store}>
        <LikesCounter />
        <Posts />
    </Provider>
}

export {Zad62}