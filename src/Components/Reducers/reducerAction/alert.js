import { SET_ALERT, REMOVE_ALERT } from '../reducerConst';
import { v4 as uuid } from 'uuid';

export const setAlert = (msg, alertType, timeout = 4000) => dispatch => {
    const randomId = uuid();
    dispatch({
        type: SET_ALERT,
        data: { msg, alertType, randomId }
    });

    setTimeout(() => dispatch({
        type: REMOVE_ALERT, payload: randomId
    }), timeout);
}