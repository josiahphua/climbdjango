// this files checks for authentication of user.
import axios from 'axios';
// grabbing all these specified cases for tests in reducers.
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    GOOGLE_AUTH_SUCCESS,
    GOOGLE_AUTH_FAIL,
    FACEBOOK_AUTH_SUCCESS,
    FACEBOOK_AUTH_FAIL,
    LOGOUT
} from './types';

// this code runs to get user data from db. user? ...Success : ...Fail
// dispatch is the info that's given to the store so that all components may have access to what's inside.
export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }; 

        try {
            const res = await axios.get(`http://localhost:8000/auth/users/me/`, config);
    
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: USER_LOADED_FAIL
            });
        }
    } else {
        dispatch({
            type: USER_LOADED_FAIL
        });
    }
};


// This one is google authentication. Quite hack. I don't know much. But will watch video when I have time.
export const googleAuthenticate = (state, code) => async dispatch => {
    if (state && code && !localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        const details = {
            'state': state,
            'code': code
        };

        const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');

        try {
            const res = await axios.post(`http://localhost:8000/auth/o/google-oauth2/?${formBody}`, config);

            dispatch({
                type: GOOGLE_AUTH_SUCCESS,
                payload: res.data
            });

            dispatch(load_user());
        } catch (err) {
            dispatch({
                type: GOOGLE_AUTH_FAIL
            });
        }
    }
};


//Same same as google reason. Will watch video when I have time. Good to have though.
export const facebookAuthenticate = (state, code) => async dispatch => {
    if (state && code && !localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        const details = {
            'state': state,
            'code': code
        };

        const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');

        try {
            const res = await axios.post(`http://localhost:8000/auth/o/facebook/?${formBody}`, config);

            dispatch({
                type: FACEBOOK_AUTH_SUCCESS,
                payload: res.data
            });

            dispatch(load_user());
        } catch (err) {
            dispatch({
                type: FACEBOOK_AUTH_FAIL
            });
        }
    }
};

// This goes to db to check for user data. If email and password matches a user.
export const checkAuthenticated = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }; 

        const body = JSON.stringify({ token: localStorage.getItem('access') });

        try {
            const res = await axios.post(`http://localhost:8000/auth/jwt/verify/`, body, config)

            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: AUTHENTICATED_SUCCESS
                });
            } else {
                dispatch({
                    type: AUTHENTICATED_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: AUTHENTICATED_FAIL
            });
        }

    } else {
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
};


// function name speaks for itself. 
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`http://localhost:8000/auth/jwt/create/`, body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(load_user());
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
};

//function name speaks for itself.
export const signup = (first_name, last_name, email, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ first_name, last_name, email, password, re_password });

    try {
        const res = await axios.post(`http://localhost:8000/auth/users/`, body, config);

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        })
    }
};

// function name speaks for itself.
export const verify = (uid, token) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token });

    try {
        await axios.post(`http://localhost:8000/auth/users/activation/`, body, config);

        dispatch({
            type: ACTIVATION_SUCCESS,
        });
    } catch (err) {
        dispatch({
            type: ACTIVATION_FAIL
        })
    }
};


// function name speaks for itself.
export const reset_password = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email });

    try {
        await axios.post(`http://localhost:8000/auth/users/reset_password/`, body, config);

        dispatch({
            type: PASSWORD_RESET_SUCCESS
        });
    } catch (err) {
        dispatch({
            type: PASSWORD_RESET_FAIL
        });
    }
};

// function name speaks for itself.
export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token, new_password, re_new_password });

    try {
        await axios.post(`http://localhost:8000/auth/users/reset_password_confirm/`, body, config);

        dispatch({
            type: PASSWORD_RESET_CONFIRM_SUCCESS
        });
    } catch (err) {
        dispatch({
            type: PASSWORD_RESET_CONFIRM_FAIL
        });
    }
};

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
};