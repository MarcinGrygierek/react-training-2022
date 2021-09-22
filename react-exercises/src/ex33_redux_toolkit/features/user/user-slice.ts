import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    name: string;
    age: number;
}

interface SetName {
    payload: string;
}

interface ClearName {}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Marcin',
        age: 54
    },
    reducers: {
        setName: (state: UserState, action: SetName) => {
            state.name = action.payload;
        },
        clearName: (state: UserState, action: ClearName) => {
            state.name = '';
        }
    }
})

export const {setName, clearName} = userSlice.actions;