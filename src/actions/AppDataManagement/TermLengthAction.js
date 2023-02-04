import {
    API_GET_TERM_LENGTH_LIST,
    API_POST_TERM_LENGTH_ADD,
    API_DELETE_TERM_LENGTH,
    API_GET_TERM_LENGTH_INFO,
    API_PATCH_TERM_LENGTH,
} from "../../constants/api"

import {
    API,
    GET_TERMS_LENGTH_LIST_SUCCESS,
    GET_TERMS_LENGTH_LIST_FAIL,

    POST_ADD_TERMS_LENGTH_SUCCESS,
    POST_ADD_TERMS_LENGTH_FAIL,

    DELETE_TERMS_LENGTH_SUCCESS,
    DELETE_TERMS_LENGTH_FAIL,

    GET_TERMS_LENGTH_INFO_SUCCESS,
    GET_TERMS_LENGTH_INFO_FAIL,

    PATCH_TERMS_LENGTH_SUCCESS,
    PATCH_TERMS_LENGTH_FAIL,
} from "../../constants/types"


export const getTermLengthList = () => ({
    type: API,
    payload: {
        url: API_GET_TERM_LENGTH_LIST,
        method: 'GET',
        success: (data) => ({
            type: GET_TERMS_LENGTH_LIST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_TERMS_LENGTH_LIST_FAIL,
            payload: data
        })
    }
})

export const addTermLength = (data) => ({
    type: API,
    payload: {
        url: API_POST_TERM_LENGTH_ADD,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: POST_ADD_TERMS_LENGTH_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: POST_ADD_TERMS_LENGTH_FAIL,
            payload: data
        })
    }
})

export const deleteTermLength = (id) => ({
    type: API,
    payload: {
        url: API_DELETE_TERM_LENGTH + `${id}/`,
        method: 'DELETE',

        success: (data) => ({
            type: DELETE_TERMS_LENGTH_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: DELETE_TERMS_LENGTH_FAIL,
            payload: data
        })
    }
})

export const getTermLengthInfo = (id) => ({
    type: API,
    payload: {
        url: API_GET_TERM_LENGTH_INFO + `${id}/`,
        method: 'GET',
        success: (data) => ({
            type: GET_TERMS_LENGTH_INFO_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_TERMS_LENGTH_INFO_FAIL,
            payload: data
        })
    }
})

export const patchTermLength = (id, data) => ({
    type: API,
    payload: {
        url: API_PATCH_TERM_LENGTH + `${id}/`,
        method: 'PATCH',
        data: data,
        success: (data) => ({
            type: PATCH_TERMS_LENGTH_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: PATCH_TERMS_LENGTH_FAIL,
            payload: data
        })
    }
})
