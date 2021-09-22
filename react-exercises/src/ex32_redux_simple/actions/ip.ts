import { Dispatch } from "react";

interface IpResponse {
    ip: string;
}

export const getMyIp = () => async (dispatch: Dispatch<any>) => {
    const response = await fetch('https://api.ipify.org?format=json');
    const data: IpResponse = await response.json();
    dispatch({type: 'SET_MY_IP', payload: data.ip})
}