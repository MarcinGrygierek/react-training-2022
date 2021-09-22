import { combineReducers } from "redux";
import ipReducer, { IpState } from "./ip-reducer";
import userReducer, { UserState } from "./user-reducer";

export interface RootState {
    user: UserState;
    ip: IpState;
}

const appReducer = combineReducers({
    user: userReducer,
    ip: ipReducer
})

const rootReducer = (state: any, action: any) => appReducer(state, action)

export default rootReducer;