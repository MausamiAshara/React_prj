import {
    API_GET_INDUSTRY_LIST,
    API_POST_INDUSTRY_ADD,
    API_DELETE_INDUSTRY,
    API_GET_INDUSTRY_INFO,
    API_PATCH_INDUSTRY,
} from "../../constants/api"

import {
    API,
    GET_INDUSTRIES_LIST_SUCCESS,
    GET_INDUSTRIES_LIST_FAIL,

    POST_ADD_INDUSTRIES_SUCCESS,
    POST_ADD_INDUSTRIES_FAIL,

    DELETE_INDUSTRIES_SUCCESS,
    DELETE_INDUSTRIES_FAIL,

    GET_INDUSTRIES_INFO_SUCCESS,
    GET_INDUSTRIES_INFO_FAIL,

    PATCH_INDUSTRIES_SUCCESS,
    PATCH_INDUSTRIES_FAIL,
} from "../../constants/types"


export const getIndustriesList = () => ({
    type: API,
    payload: {
        url: API_GET_INDUSTRY_LIST,
        method: 'GET',
        success: (data) => ({
            type: GET_INDUSTRIES_LIST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_INDUSTRIES_LIST_FAIL,
            payload: data
        })
    }
})

export const addIndustries = (data) => ({
    type: API,
    payload: {
        url: API_POST_INDUSTRY_ADD,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: POST_ADD_INDUSTRIES_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: POST_ADD_INDUSTRIES_FAIL,
            payload: data
        })
    }
})

export const deleteIndustries = (id) => ({
    type: API,
    payload: {
        url: API_DELETE_INDUSTRY + `${id}/`,
        method: 'DELETE',

        success: (data) => ({
            type: DELETE_INDUSTRIES_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: DELETE_INDUSTRIES_FAIL,
            payload: data
        })
    }
})

export const getIndustriesInfo = (id) => ({
    type: API,
    payload: {
        url: API_GET_INDUSTRY_INFO + `${id}/`,
        method: 'GET',
        success: (data) => ({
            type: GET_INDUSTRIES_INFO_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_INDUSTRIES_INFO_FAIL,
            payload: data
        })
    }
})

export const patchIndustries = (id, data) => ({
    type: API,
    payload: {
        url: API_PATCH_INDUSTRY + `${id}/`,
        method: 'PATCH',
        data: data,
        success: (data) => ({
            type: PATCH_INDUSTRIES_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: PATCH_INDUSTRIES_FAIL,
            payload: data
        })
    }
})
