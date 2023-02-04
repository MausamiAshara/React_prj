import {
    API_GET_INTEREST_LIST,
    API_POST_INTEREST_ADD,
    API_DELETE_INTEREST,
    API_GET_INTEREST_INFO,
    API_PATCH_INTEREST,
} from "../../constants/api"

import {
    API,
    GET_INTEREST_LIST_SUCCESS,
    GET_INTEREST_LIST_FAIL,

    POST_ADD_INTEREST_SUCCESS,
    POST_ADD_INTEREST_FAIL,

    DELETE_INTEREST_SUCCESS,
    DELETE_INTEREST_FAIL,

    GET_INTEREST_INFO_SUCCESS,
    GET_INTEREST_INFO_FAIL,

    PATCH_INTEREST_SUCCESS,
    PATCH_INTEREST_FAIL,
} from "../../constants/types"


export const getInterestList = () => ({
    type: API,
    payload: {
        url: API_GET_INTEREST_LIST,
        method: 'GET',
        success: (data) => ({
            type: GET_INTEREST_LIST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_INTEREST_LIST_FAIL,
            payload: data
        })
    }
})

export const addInterest = (data) => ({
    type: API,
    payload: {
        url: API_POST_INTEREST_ADD,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: POST_ADD_INTEREST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: POST_ADD_INTEREST_FAIL,
            payload: data
        })
    }
})

export const deleteInterest = (id) => ({
    type: API,
    payload: {
        url: API_DELETE_INTEREST + `${id}/`,
        method: 'DELETE',

        success: (data) => ({
            type: DELETE_INTEREST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: DELETE_INTEREST_FAIL,
            payload: data
        })
    }
})

export const getInterestInfo = (id) => ({
    type: API,
    payload: {
        url: API_GET_INTEREST_INFO + `${id}/`,
        method: 'GET',
        success: (data) => ({
            type: GET_INTEREST_INFO_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_INTEREST_INFO_FAIL,
            payload: data
        })
    }
})

export const patchInterest = (id, data) => ({
    type: API,
    payload: {
        url: API_PATCH_INTEREST + `${id}/`,
        method: 'PATCH',
        data: data,
        success: (data) => ({
            type: PATCH_INTEREST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: PATCH_INTEREST_FAIL,
            payload: data
        })
    }
})
