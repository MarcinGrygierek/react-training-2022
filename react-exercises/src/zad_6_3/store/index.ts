import { configureStore } from "@reduxjs/toolkit";
import { booksSlice } from "../features/books/books-slice";

const store = configureStore({
    reducer: {
        books: booksSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;