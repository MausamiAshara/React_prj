import {
    API_GET_LOAN_TAG_LIST,
    API_POST_LOAN_TAG_ADD,
    API_DELETE_LOAN_TAG,
    API_PATCH_LOAN_TAG,
    API_GET_LOAN_TAG_INFO,
} from "../../constants/api"

import {
    API,
    
    GET_LOAN_TAG_LIST_SUCCESS,
    GET_LOAN_TAG_LIST_FAIL,

    DELETE_LOAN_TAG_SUCCESS,
    DELETE_LOAN_TAG_FAIL,
    
    POST_ADD_LOAN_TAG_SUCCESS,
    POST_ADD_LOAN_TAG_FAIL,

    PATCH_LOAN_TAG_SUCCESS,
    PATCH_LOAN_TAG_FAIL,
    GET_LOAN_TAG_INFO_SUCCESS,
    GET_LOAN_TAG_INFO_FAIL,
} from "../../constants/types"


export const getLoanTagList = () => ({
    type: API,
    payload: {
        url: API_GET_LOAN_TAG_LIST,
        method: 'GET',
        success: (data) => ({
            type: GET_LOAN_TAG_LIST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_LOAN_TAG_LIST_FAIL,
            payload: data
        })
    }
})

export const addLoanTag = (data) => ({
    type: API,
    payload: {
        url: API_POST_LOAN_TAG_ADD,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: POST_ADD_LOAN_TAG_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: POST_ADD_LOAN_TAG_FAIL,
            payload: data
        })
    }
})

export const deleteLoanTag = (id) => ({
    type: API,
    payload: {
        url: API_DELETE_LOAN_TAG + `${id}/`,
        method: 'DELETE',

        success: (data) => ({
            type: DELETE_LOAN_TAG_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: DELETE_LOAN_TAG_FAIL,
            payload: data
        })
    }
})

export const getLoanTagInfo = (id) => ({
    type: API,
    payload: {
        url: API_GET_LOAN_TAG_INFO + `${id}/`,
        method: 'GET',
        success: (data) => ({
            type: GET_LOAN_TAG_INFO_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_LOAN_TAG_INFO_FAIL,
            payload: data
        })
    }
})

export const patchLoanTag = (id, data) => ({
    type: API,
    payload: {
        url: API_PATCH_LOAN_TAG + `${id}/`,
        method: 'PATCH',
        data: data,
        success: (data) => ({
            type: PATCH_LOAN_TAG_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: PATCH_LOAN_TAG_FAIL,
            payload: data
        })
    }
})
