import {
    API_GET_DASHBOARD_LIST, API_PUSH_NOTIFICATION, API_SEARCH_BLOCKED_USER, API_SEARCH_DATA, API_SEARCH_LOAN_MANAGEMENT, API_SEARCH_REPORTED_ARTICLE, API_SEARCH_REPORTED_FORUM, API_SEARCH_REPORTED_POST, API_SEARCH_SUBSCRIBED_USER,
} from "../constants/api"

import {
    GET_DASHBOARD_LIST_SUCCESS,
    API, GET_DASHBOARD_LIST_FAIL, SEARCH_DATA_SUCCESS, SEARCH_DATA_FAIL, SEARCH_BLOCKED_DATA_SUCCESS, SEARCH_BLOCKED_DATA_FAIL, SEARCH_SUBSCRIBED_USER_DATA_SUCCESS, SEARCH_SUBSCRIBED_USER_DATA_FAIL, SEARCH_REPORTED_ARTICLE_SUCCESS, SEARCH_REPORTED_ARTICLE_FAIL, SEARCH_REPORTED_POST_SUCCESS, SEARCH_REPORTED_POST_FAIL, SEARCH_LOAN_MANAGEMENT_SUCCESS, SEARCH_LOAN_MANAGEMENT_FAIL, SEND_PUSH_NOTIFICATION_SUCCESS, SEND_PUSH_NOTIFICATION_FAIL, SEARCH_REPORTED_FORUM_SUCCESS, SEARCH_REPORTED_FORUM_FAIL,
} from "../constants/types"


export const getDashboardList = () => ({
    type: API,
    payload: {
        url: API_GET_DASHBOARD_LIST,
        method: 'GET',
        success: (data) => ({
            type: GET_DASHBOARD_LIST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: GET_DASHBOARD_LIST_FAIL,
            payload: data
        })
    }
})

export const searchData = (data) => ({
    type: API,
    payload: {
        url: API_SEARCH_DATA,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: SEARCH_DATA_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: SEARCH_DATA_FAIL,
            payload: data
        })
    }
})

export const searchBlockedUser = (data) => ({
    type: API,
    payload: {
        url: API_SEARCH_BLOCKED_USER,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: SEARCH_BLOCKED_DATA_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: SEARCH_BLOCKED_DATA_FAIL,
            payload: data
        })
    }
})

export const searchSubscribedUser = (data) => ({
    type: API,
    payload: {
        url: API_SEARCH_SUBSCRIBED_USER,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: SEARCH_SUBSCRIBED_USER_DATA_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: SEARCH_SUBSCRIBED_USER_DATA_FAIL,
            payload: data
        })
    }
})

export const searchReportedArticle = (data) => ({
    type: API,
    payload: {
        url: API_SEARCH_REPORTED_ARTICLE,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: SEARCH_REPORTED_ARTICLE_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: SEARCH_REPORTED_ARTICLE_FAIL,
            payload: data
        })
    }
})
export const searchReportedForum = (data) => ({
    type: API,
    payload: {
        url: API_SEARCH_REPORTED_FORUM,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: SEARCH_REPORTED_FORUM_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: SEARCH_REPORTED_FORUM_FAIL,
            payload: data
        })
    }
})

export const searchReportedPost = (data) => ({
    type: API,
    payload: {
        url: API_SEARCH_REPORTED_POST,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: SEARCH_REPORTED_POST_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: SEARCH_REPORTED_POST_FAIL,
            payload: data
        })
    }
})

export const searchLoanManagement = (data) => ({
    type: API,
    payload: {
        url: API_SEARCH_LOAN_MANAGEMENT,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: SEARCH_LOAN_MANAGEMENT_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: SEARCH_LOAN_MANAGEMENT_FAIL,
            payload: data
        })
    }
})

export const pushNotification = (data) => ({
    type: API,
    payload: {
        url: API_PUSH_NOTIFICATION,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: SEND_PUSH_NOTIFICATION_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: SEND_PUSH_NOTIFICATION_FAIL,
            payload: data
        })
    }
})
