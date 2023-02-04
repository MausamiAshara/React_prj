import {
    API_GET_REVIEW_LIST,
    API_DELETE_REVIEW,
} from "../constants/api"

import {
    API,
    GET_REVIEW_LIST_SUCCESS,
    GET_REVIEW_LIST_FAIL,

    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,
} from "../constants/types"


export const getReviewList = () => ({
    type: API,
    payload: {
        url: API_GET_REVIEW_LIST,
        method: 'GET',
        success: (data) => ({
            type: GET_REVIEW_LIST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_REVIEW_LIST_FAIL,
            payload: data
        })
    }
})


export const deleteReview = (id) => ({
    type: API,
    payload: {
        url: API_DELETE_REVIEW + `${id}/`,
        method: 'DELETE',

        success: (data) => ({
            type: DELETE_REVIEW_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: DELETE_REVIEW_FAIL,
            payload: data
        })
    }
})