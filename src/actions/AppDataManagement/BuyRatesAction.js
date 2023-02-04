import {
    API_GET_BUY_RATE_LIST,
    API_POST_BUY_RATE_ADD,
    API_DELETE_BUY_RATE,
    API_GET_BUY_RATE_INFO,
    API_PATCH_BUY_RATE,
} from "../../constants/api"

import {
    API,
    GET_BUY_RATES_LIST_SUCCESS,
    GET_BUY_RATES_LIST_FAIL,

    POST_ADD_BUY_RATES_SUCCESS,
    POST_ADD_BUY_RATES_FAIL,

    DELETE_BUY_RATES_SUCCESS,
    DELETE_BUY_RATES_FAIL,

    GET_BUY_RATES_INFO_SUCCESS,
    GET_BUY_RATES_INFO_FAIL,

    PATCH_BUY_RATES_SUCCESS,
    PATCH_BUY_RATES_FAIL,

} from "../../constants/types"


export const getBuyRatesList = () => ({
    type: API,
    payload: {
        url: API_GET_BUY_RATE_LIST,
        method: 'GET',
        success: (data) => ({
            type: GET_BUY_RATES_LIST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_BUY_RATES_LIST_FAIL,
            payload: data
        })
    }
})

export const addBuyRates = (data) => ({
    type: API,
    payload: {
        url: API_POST_BUY_RATE_ADD,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: POST_ADD_BUY_RATES_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: POST_ADD_BUY_RATES_FAIL,
            payload: data
        })
    }
})

export const deleteBuyRates = (id) => ({
    type: API,
    payload: {
        url: API_DELETE_BUY_RATE + `${id}/`,
        method: 'DELETE',

        success: (data) => ({
            type: DELETE_BUY_RATES_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: DELETE_BUY_RATES_FAIL,
            payload: data
        })
    }
})

export const getBuyRatesInfo = (id) => ({
    type: API,
    payload: {
        url: API_GET_BUY_RATE_INFO + `${id}/`,
        method: 'GET',
        success: (data) => ({
            type: GET_BUY_RATES_INFO_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_BUY_RATES_INFO_FAIL,
            payload: data
        })
    }
})

export const patchBuyRates = (id, data) => ({
    type: API,
    payload: {
        url: API_PATCH_BUY_RATE + `${id}/`,
        method: 'PATCH',
        data: data,
        success: (data) => ({
            type: PATCH_BUY_RATES_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: PATCH_BUY_RATES_FAIL,
            payload: data
        })
    }
})
