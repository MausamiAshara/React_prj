import {
    API_GET_STATE_LIST,
    API_DELETE_STATE,
    API_POST_STATE_ADD,
    API_GET_STATE_INFO,
    API_PATCH_STATE,
} from "../../constants/api"

import {
    API,
    GET_STATE_LIST_SUCCESS,
    GET_STATE_LIST_FAIL,

    POST_ADD_STATE_SUCCESS,
    POST_ADD_STATE_FAIL,

    DELETE_STATE_SUCCESS,
    DELETE_STATE_FAIL,

    GET_STATE_INFO_SUCCESS,
    GET_STATE_INFO_FAIL,

    PATCH_STATE_SUCCESS,
    PATCH_STATE_FAIL,
} from "../../constants/types"


export const getStateList = () => ({
    type: API,
    payload: {
        url: API_GET_STATE_LIST,
        method: 'GET',
        success: (data) => ({
            type: GET_STATE_LIST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_STATE_LIST_FAIL,
            payload: data
        })
    }
})

export const addState = (data) => ({
    type: API,
    payload: {
        url: API_POST_STATE_ADD,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: POST_ADD_STATE_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: POST_ADD_STATE_FAIL,
            payload: data
        })
    }
})

export const deleteState = (id) => ({
    type: API,
    payload: {
        url: API_DELETE_STATE + `${id}/`,
        method: 'DELETE',

        success: (data) => ({
            type: DELETE_STATE_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: DELETE_STATE_FAIL,
            payload: data
        })
    }
})

export const getStateInfo = (id) => ({
    type: API,
    payload: {
        url: API_GET_STATE_INFO + `${id}/`,
        method: 'GET',
        success: (data) => ({
            type: GET_STATE_INFO_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_STATE_INFO_FAIL,
            payload: data
        })
    }
})

export const patchState = (id, data) => ({
    type: API,
    payload: {
        url: API_PATCH_STATE + `${id}/`,
        method: 'PATCH',
        data: data,
        success: (data) => ({
            type: PATCH_STATE_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: PATCH_STATE_FAIL,
            payload: data
        })
    }
})
