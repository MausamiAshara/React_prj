import * as API_TYPE from "../constants/api";
import * as ACTION_TYPE from "../constants/types";

export const userMetaList = (data) => ({
    type: ACTION_TYPE.API,
    payload: {
        url: API_TYPE.API_GET_USER_META_LIST,
        method: 'POST'
    }
})

export const userDisapproveMetaList = (data) => ({
    type: ACTION_TYPE.API,
    payload: {
        url: API_TYPE.API_DISAPPROVED_USER_META_LIST,
        method: 'GET',
    }
})

export const postUserList = (data) => ({
    type: ACTION_TYPE.API,
    payload: {
        url: API_TYPE.API_GET_USER_LIST,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: ACTION_TYPE.GET_USER_LIST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: ACTION_TYPE.GET_USER_LIST_FAIL,
            payload: data
        })
    }
})

export const deleteUser = (id) => ({
    type: ACTION_TYPE.API,
    payload: {
        url: API_TYPE.API_DELETE_USER + `${id}/`,
        method: 'DELETE',
        success: (data) => ({
            type: ACTION_TYPE.DELETE_USER_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: ACTION_TYPE.DELETE_USER_FAIL,
            payload: data
        })
    }
})

export const approveUser = (id, data) => ({
    type: ACTION_TYPE.API,
    payload: {
        url: API_TYPE.API_PUT_USER_APPROVE + `${id}/`,
        method: 'PUT',
        data: data,
        success: (data) => ({
            type: ACTION_TYPE.PUT_APPROVE_USER_ACCOUNT_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: ACTION_TYPE.PUT_APPROVE_USER_ACCOUNT_FAIL,
            payload: data
        })
    }
})

export const blockUser = (id, data) => ({
    type: ACTION_TYPE.API,
    payload: {
        url: API_TYPE.API_PATCH_USER_BLOCK + `${id}/`,
        method: 'PATCH',
        data: data,
        success: (data) => ({
            type: ACTION_TYPE.PATCH_BLOCK_USER_ACCOUNT_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: ACTION_TYPE.PATCH_BLOCK_USER_ACCOUNT_FAIL,
            payload: data
        })
    }
})

export const verifyUser = (data) => ({
    type: ACTION_TYPE.API,
    payload: {
        url: API_TYPE.API_POST_USER_VERIFIED,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: ACTION_TYPE.POST_USER_VERIFIED_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: ACTION_TYPE.POST_USER_VERIFIED_FAIL,
            payload: data
        })
    }
})

// export const getUserInfo = (id) => ({
//     type: ACTION_TYPE.API,
//     payload: {
//         url: API_TYPE.API_GET_USER_INFO + `${id}/`,
//         method: 'GET',
//         success: (data) => ({
//             type: ACTION_TYPE.GET_USER_INFO_SUCCESS,
//             payload: data
//         }),
//         error: (data) => ({
//             type: ACTION_TYPE.GET_USER_INFO_FAIL,
//             payload: data
//         })
//     }
// })

export const postBlockedUserList = (data) => ({
    type: ACTION_TYPE.API,
    payload: {
        url: API_TYPE.API_POST_BLOCKED_USER_LIST,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: ACTION_TYPE.POST_BLOCKED_USER_LIST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: ACTION_TYPE.POST_BLOCKED_USER_LIST_FAIL,
            payload: data
        })
    }
})

export const getSubscriptionUserList = () => ({
    type: ACTION_TYPE.API,
    payload: {
        url: API_TYPE.API_GET_SUBSCRIPTION_USER_LIST,
        method: 'GET',
        success: (data) => ({
            type: ACTION_TYPE.GET_USER_SUBSCRIPTION_LIST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: ACTION_TYPE.GET_USER_SUBSCRIPTION_LIST_ERROR,
            payload: data
        })
    }
})