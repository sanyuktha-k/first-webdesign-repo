import axios from "axios";
import { LOGIN, NO_LOGIN, USER_LOADED, AUTH_ERROR } from '../reducerConst';
import tokenToHeader from "../../localStorage/tokenToHeader";
import { setAlert } from "./alert";


export const loginUser = (email, password) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({ email, password });
        const res = await axios.post('/api/user/login', body, config);
        dispatch({
            type: LOGIN,
            data: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: NO_LOGIN
        })
    }
}


// LOAD A USER
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        tokenToHeader(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}