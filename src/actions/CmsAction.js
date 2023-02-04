import { API_POST_CMS_LIST, API_CMS_PATCH, API_INITIAL_CMS } from "../constants/api"

import {
    POST_CMS_LIST_SUCCESS,
    API, POST_CMS_LIST_FAIL,
    PATCH_CMS_SUCCESS,
    PATCH_CMS_FAIL,
    PATCH_INITIAL_CMS_FAIL,
    PATCH_INITIAL_CMS_SUCCESS,
} from "../constants/types"


export const postCmsList = (data) => ({
    type: API,
    payload: {
        url: API_POST_CMS_LIST,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: POST_CMS_LIST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: POST_CMS_LIST_FAIL,
            payload: data
        })
    }
})

export const initialCms = (data) => ({
    type: API,
    payload: {
        url: API_INITIAL_CMS,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: PATCH_INITIAL_CMS_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: PATCH_INITIAL_CMS_FAIL,
            payload: data
        })
    }
})

export const patchCms = (id, data) => ({
    type: API,
    payload: {
        url: API_CMS_PATCH + `${id}/`,
        method: 'PATCH',
        data: data,
        success: (data) => ({
            type: PATCH_CMS_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: PATCH_CMS_FAIL,
            payload: data
        })
    }
})
