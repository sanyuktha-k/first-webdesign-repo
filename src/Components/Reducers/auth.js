import {
    LOGIN,
    NO_LOGIN
} from './reducerConst';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
};

export default function (state = initialState, reducer) {

    //
    const { type, data } = reducer;

    switch (type) {
        case LOGIN:
            return {
                ...state,
                ...data,
                isAuthenticated: true,
                loading: false
            };
        default:
            return state;
    }
}