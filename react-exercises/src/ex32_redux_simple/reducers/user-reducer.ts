export interface UserState {
    name: string;
    age: number;
}

const initialState: UserState = {
    name: 'Marcin',
    age: 54
}

interface SetName {
    type: 'SET_NAME';
    payload: string;
}

interface ClearName {
    type: 'CLEAR_NAME';
}

type Action = SetName | ClearName;

export default (state = initialState, action: Action) => {
    switch(action.type) {
        case 'SET_NAME': {
            return {
                ...state,
                name: action.payload
            }
        }
        case 'CLEAR_NAME': {
            return {
                ...state,
                name: ''
            }
        }
        default: return state;
    }
}