import {
    API_GET_COMPANY_LIST,
    API_DELETE_COMPANY,
} from "../constants/api";

import {
    API,
    GET_COMPANY_LIST_SUCCESS,
    GET_COMPANY_LIST_FAIL,

    DELETE_COMPANY_SUCCESS,
    DELETE_COMPANY_FAIL,

} from "../constants/types"


export const getCompanyList = () => ({
    type: API,
    payload: {
        url: API_GET_COMPANY_LIST,
        method: 'GET',
        success: (data) => ({
            type: GET_COMPANY_LIST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_COMPANY_LIST_FAIL,
            payload: data
        })
    }
})

// export const getCompanyInfo = (id) => ({
//     type: API,
//     payload: {
//         url: API_GET_COMPANY_LIST + `${id}/`,
//         method: 'GET',
//         success: (data) => ({
//             type: GET_CATEGORY_INFO_SUCCESS,
//             payload: data
//         }),
//         error: (data) => ({
//             type: GET_CATEGORY_INFO_FAIL,
//             payload: data
//         })
//     }
// })

export const deleteCompany = (id, data) => ({
    type: API,
    payload: {
        url: API_DELETE_COMPANY + `${id}/`,
        method: 'DELETE',
        data: data,
        success: (data) => ({
            type: DELETE_COMPANY_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: DELETE_COMPANY_FAIL,
            payload: data
        })
    }
})