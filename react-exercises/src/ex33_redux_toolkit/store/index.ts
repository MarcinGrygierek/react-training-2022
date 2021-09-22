import { configureStore } from "@reduxjs/toolkit";
import { ipSlice } from "../features/ip/ip-slice";
import { userSlice } from "../features/user/user-slice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        ip: ipSlice.reducer 
    }
})

export type RootState = ReturnType<typeof store.getState>;
export default store;