import {
    API_GET_UP_SELL_POINT_LIST,
    API_POST_UP_SELL_POINT,
    API_DELETE_UP_SELL_POINT,
    API_GET_UP_SELL_POINT_INFO,
    API_PATCH_UP_SELL_POINT,
} from "../../constants/api"

import {
    API,
    GET_UP_SELL_POINTS_LIST_SUCCESS,
    GET_UP_SELL_POINTS_LIST_FAIL,

    POST_ADD_UP_SELL_POINTS_SUCCESS,
    POST_ADD_UP_SELL_POINTS_FAIL,

    DELETE_UP_SELL_POINTS_SUCCESS,
    DELETE_UP_SELL_POINTS_FAIL,

    GET_UP_SELL_POINTS_INFO_SUCCESS,
    GET_UP_SELL_POINTS_INFO_FAIL,

    PATCH_UP_SELL_POINTS_SUCCESS,
    PATCH_UP_SELL_POINTS_FAIL,
} from "../../constants/types"


export const getUpSellPointsList = () => ({
    type: API,
    payload: {
        url: API_GET_UP_SELL_POINT_LIST,
        method: 'GET',
        success: (data) => ({
            type: GET_UP_SELL_POINTS_LIST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_UP_SELL_POINTS_LIST_FAIL,
            payload: data
        })
    }
})

export const addUpSellPoints = (data) => ({
    type: API,
    payload: {
        url: API_POST_UP_SELL_POINT,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: POST_ADD_UP_SELL_POINTS_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: POST_ADD_UP_SELL_POINTS_FAIL,
            payload: data
        })
    }
})

export const deleteUpSellPoints = (id) => ({
    type: API,
    payload: {
        url: API_DELETE_UP_SELL_POINT + `${id}/`,
        method: 'DELETE',
        success: (data) => ({
            type: DELETE_UP_SELL_POINTS_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: DELETE_UP_SELL_POINTS_FAIL,
            payload: data
        })
    }
})

export const getUpSellPointsInfo = (id) => ({
    type: API,
    payload: {
        url: API_GET_UP_SELL_POINT_INFO + `${id}/`,
        method: 'GET',
        success: (data) => ({
            type: GET_UP_SELL_POINTS_INFO_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_UP_SELL_POINTS_INFO_FAIL,
            payload: data
        })
    }
})

export const patchUpSellPoints = (id, data) => ({
    type: API,
    payload: {
        url: API_PATCH_UP_SELL_POINT + `${id}/`,
        method: 'PATCH',
        data: data,
        success: (data) => ({
            type: PATCH_UP_SELL_POINTS_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: PATCH_UP_SELL_POINTS_FAIL,
            payload: data
        })
    }
})
