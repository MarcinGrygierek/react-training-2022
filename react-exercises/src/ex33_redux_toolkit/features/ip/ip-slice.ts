import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IpState {
    address: string;
}

interface IpResponse {
    ip: string;
}

const initialState: IpState = {
    address: ''
}

export const getMyIp = createAsyncThunk('ip/getAddress', async() => {
    const response = await fetch('https://api.ipify.org?format=json');
    const data: IpResponse = await response.json();
    return data.ip;
})

export const ipSlice = createSlice({
    name: 'ip',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMyIp.fulfilled, (state, action) => {
            state.address = action.payload;
        })
    }
})