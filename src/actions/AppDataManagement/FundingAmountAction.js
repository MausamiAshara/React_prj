import {
    API_GET_FUNDING_AMOUNT_LIST,
    API_POST_FUNDING_AMOUNT_ADD,
    API_DELETE_FUNDING_AMOUNT,
    API_GET_FUNDING_AMOUNT_INFO,
    API_PATCH_FUNDING_AMOUNT,
} from "../../constants/api"

import {
    API,
    GET_FUNDING_AMOUNT_LIST_SUCCESS,
    GET_FUNDING_AMOUNT_LIST_FAIL,

    POST_ADD_FUNDING_AMOUNT_SUCCESS,
    POST_ADD_FUNDING_AMOUNT_FAIL,

    DELETE_FUNDING_AMOUNT_SUCCESS,
    DELETE_FUNDING_AMOUNT_FAIL,

    GET_FUNDING_AMOUNT_INFO_SUCCESS,
    GET_FUNDING_AMOUNT_INFO_FAIL,

    PATCH_FUNDING_AMOUNT_SUCCESS,
    PATCH_FUNDING_AMOUNT_FAIL,
} from "../../constants/types"


export const getFundingAmountList = () => ({
    type: API,
    payload: {
        url: API_GET_FUNDING_AMOUNT_LIST,
        method: 'GET',
        success: (data) => ({
            type: GET_FUNDING_AMOUNT_LIST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_FUNDING_AMOUNT_LIST_FAIL,
            payload: data
        })
    }
})

export const addFundingAmount = (data) => ({
    type: API,
    payload: {
        url: API_POST_FUNDING_AMOUNT_ADD,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: POST_ADD_FUNDING_AMOUNT_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: POST_ADD_FUNDING_AMOUNT_FAIL,
            payload: data
        })
    }
})

export const deleteFundingAmount = (id) => ({
    type: API,
    payload: {
        url: API_DELETE_FUNDING_AMOUNT + `${id}/`,
        method: 'DELETE',

        success: (data) => ({
            type: DELETE_FUNDING_AMOUNT_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: DELETE_FUNDING_AMOUNT_FAIL,
            payload: data
        })
    }
})

export const getFundingAmountInfo = (id) => ({
    type: API,
    payload: {
        url: API_GET_FUNDING_AMOUNT_INFO + `${id}/`,
        method: 'GET',
        success: (data) => ({
            type: GET_FUNDING_AMOUNT_INFO_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_FUNDING_AMOUNT_INFO_FAIL,
            payload: data
        })
    }
})

export const patchFundingAmount = (id, data) => ({
    type: API,
    payload: {
        url: API_PATCH_FUNDING_AMOUNT + `${id}/`,
        method: 'PATCH',
        data: data,
        success: (data) => ({
            type: PATCH_FUNDING_AMOUNT_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: PATCH_FUNDING_AMOUNT_FAIL,
            payload: data
        })
    }
})
