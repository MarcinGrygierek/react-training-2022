import { Provider } from "react-redux"
import { Form } from "./Form"
import { Header } from "./Header"
import { Main } from "./Main"
import store from './store'

const Ex33 = () => {
    return <Provider store={store}>
        <Header />
        <Main />
        <Form />
    </Provider>
}

export {Ex33}