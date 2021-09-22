import reduxThunk from 'redux-thunk';
import reducers from '../reducers'

import { applyMiddleware, createStore } from "redux";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;