import { createSlice } from "@reduxjs/toolkit";

interface LikesState {
    count: number;
}

const initialState: LikesState = {
    count: 0
}

interface ToggleLike {
    payload: boolean
}

export const likesSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        toggleLike: (state: LikesState, action: ToggleLike) => {
            const addLike = action.payload;
            state.count += addLike ? 1 : -1;
        }
    }
})

export const {toggleLike} = likesSlice.actions;