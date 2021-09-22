export interface IpState {
    ip: string;
}

const initialState: IpState = {
    ip: ''
}

interface SetMyIp {
    type: 'SET_MY_IP';
    payload: string;
}

type Action = SetMyIp;

export default (state = initialState, action: Action) => {
    switch(action.type) {
        case 'SET_MY_IP': {
            return {
                ...state,
                ip: action.payload
            }
        }
        default: return state;
    }
}