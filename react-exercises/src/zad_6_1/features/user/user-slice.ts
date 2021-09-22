import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
    name: string;
}

const initialState: UserState=  {
    name: 'Marcin'
}

interface SetName {
    payload: string;
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName: (state: UserState, action: SetName) => {
            state.name = action.payload;
        },
    }
})

export const {setName} = userSlice.actions;