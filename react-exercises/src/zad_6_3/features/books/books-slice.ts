import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface SingleItem {
    id: string;
    volumeInfo: {
        title: string;
        publishedDate: string;
    }
}

interface BooksState {
    items: SingleItem[];
    loading: boolean;
}


interface BookResponse {
    kind: string;
    totalItems: number;
    items: SingleItem[]
}

const initialState: BooksState = {
    items: [],
    loading: false
}

export const getBooks = createAsyncThunk('books/getBooks', async (search: string) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
    const data: BookResponse = await response.json();
    return data.items;
});

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBooks.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getBooks.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        })
    }
})