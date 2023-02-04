import { API_GET_LOAN_LIST } from "../constants/api";

import {
    API,
    GET_LOAN_LIST_SUCCESS,
    GET_LOAN_LIST_FAIL,
} from "../constants/types";

export const getLoanList = () => ({
    type: API,
    payload: {
        url: API_GET_LOAN_LIST,
        method: 'GET',
        success: (data) => ({
            type: GET_LOAN_LIST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_LOAN_LIST_FAIL,
            payload: data
        })
    }
})
