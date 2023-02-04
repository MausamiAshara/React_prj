import {
    API_LOGIN,
    API_LOGOUT,
    API_CHANGE_PASSWORD,
    API_FORGOT_PASSWORD,
    API_SIGNUP,
} from "../constants/api";

import {
    API,

    LOGIN_SUCCESS,
    LOGIN_FAIL,

    LOGOUT_SUCCESS,
    LOGOUT_FAIL,

    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL,

    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
} from "../constants/types";

//LOGIN
export const doLogin = (data) => ({
    type: API,
    payload: {
        url: API_LOGIN,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: LOGIN_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: LOGIN_FAIL,
            payload: data
        })
    }
})

//REGISTER
export const doREGISTER = (data) => ({
    type: API,
    payload: {
        url: API_SIGNUP,
        method: 'POST',
        data: data
    }
})

//LOGOUT
export const doLogout = (data) => ({
    type: API,
    payload: {
        url: API_LOGOUT,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: LOGOUT_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: LOGOUT_FAIL,
            payload: data
        })
    }
})

//CHANGE_PASSWORD
export const changePassword = (data) => ({
    type: API,
    payload: {
        url: API_CHANGE_PASSWORD,
        method: 'PATCH',
        data: data,
        success: (data) => ({
            type: CHANGE_PASSWORD_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: CHANGE_PASSWORD_FAIL,
            payload: data
        })
    }
})

//FORGOT_PASSWORD
export const forgotPassword = (data) => ({
    type: API,
    payload: {
        url: API_FORGOT_PASSWORD,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: FORGOT_PASSWORD_FAIL,
            payload: data
        })
    }
})