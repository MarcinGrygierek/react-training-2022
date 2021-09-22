import { configureStore } from "@reduxjs/toolkit";
import { likesSlice } from "../features/likes/likes-slice";

const store = configureStore({
    reducer: {
        likes: likesSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store;