import { SET_ALERT, REMOVE_ALERT } from './reducerConst';

const initialState = [];

export default function (state = initialState, reducer) {
    const { type, data } = reducer;

    switch (type) {
        case SET_ALERT:
            return [...state, data];
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}