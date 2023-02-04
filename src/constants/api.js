export const {
    REACT_APP_API_BASE: API_BASE,
    REACT_APP_API_BASE_BASE_URL_IMAGE: BASE_URL_IMAGE,
    REACT_APP_API_IMAGE_BASE: IMAGE_BASE_URL,
} = process.env

//Authentication
export const API_LOGIN = `${API_BASE}user_login/`
export const API_SIGNUP = `${API_BASE}user_signup/`
export const API_LOGOUT = `${API_BASE}logout/`
export const API_CHANGE_PASSWORD = `${API_BASE}change_password/`


// User Management
export const API_DELETE_ARTICLE = (id) => `${API_BASE}meta_data/${id}/`
export const API_POST_ARTICLE = `${API_BASE}meta_data/`
export const API_GET_CATEGORY_LIST = `${API_BASE}meta_data/`
export const API_CATEGORY_LIST_DETAIL = (id) => `${API_BASE}meta_data/${id}`
export const API_PATCH_ARTICLE = (id) => `${API_BASE}meta_data/${id}`
export const API_GET_ARTICLE_INFO = (id) => `${API_BASE}meta_data/${id}`
export const API_GET_INFORMATION_CATEGORY = `${API_BASE}category/`

// export const API_GET_CATEGORY_LIST = `${API_BASE}adminapp/feed_category_crud/`

export const API_GET_USER_META_LIST = `${API_BASE}post_list/list_post/`
export const API_DISAPPROVED_USER_META_LIST = `${API_BASE}disapproved_post`




//Dashboard Management
export const API_GET_DASHBOARD_LIST = `${API_BASE}adminapp/admin_dashboard/`
export const API_FORGOT_PASSWORD = `${API_BASE}adminapp/forgot_password/`


//Search 
export const API_SEARCH_DATA = `${API_BASE}adminapp/search/searchlist/`
export const API_SEARCH_BLOCKED_USER = `${API_BASE}adminapp/blockedusersearch/get_queryset/`
export const API_SEARCH_SUBSCRIBED_USER = `${API_BASE}adminapp/subsusersearch/get_queryset/`
export const API_SEARCH_REPORTED_ARTICLE = `${API_BASE}adminapp/reportedarticlesearch/get_queryset/`
export const API_SEARCH_REPORTED_POST = `${API_BASE}adminapp/reportedpostsearch/get_queryset/`
export const API_SEARCH_LOAN_MANAGEMENT = `${API_BASE}adminapp/loanmanagementsearch/get_queryset/`
export const API_SEARCH_REPORTED_FORUM = `${API_BASE}adminapp/reportedforumsearch/get_queryset/`



//User Management - (Funder / Broker Management)
export const API_GET_USER_LIST = `${API_BASE}adminapp/user_management/`
export const API_DELETE_USER = `${API_BASE}adminapp/user_management/`
export const API_POST_USER_VERIFIED = `${API_BASE}adminapp/user_management/verify_user/`
// export const API_GET_USER_INFO = `${API_BASE}adminapp/user_management/`
export const API_PUT_USER_APPROVE = `${API_BASE}adminapp/user_management/`
export const API_POST_BLOCKED_USER_LIST = `${API_BASE}adminapp/user_management/blocked_user_list/`
export const API_PATCH_USER_BLOCK = `${API_BASE}adminapp/user_management/`

// Subscribed user
export const API_GET_SUBSCRIPTION_USER_LIST = `${API_BASE}adminapp/subscriptionuser/`


//Company Management
export const API_GET_COMPANY_LIST = `${API_BASE}adminapp/company_list`
export const API_DELETE_COMPANY = `${API_BASE}adminapp/company_delete/`


// Post Management
export const API_POST_LIST = `${API_BASE}adminapp/post_list`
export const API_REPORTED_POST_LIST = `${API_BASE}adminapp/reportedpost/reported_post_list/`
export const API_POST_INFO = `${API_BASE}adminapp/post_retrieve/`
export const API_POST_DELETE = `${API_BASE}adminapp/post_delete/`

//Post Comment
export const API_GET_COMMENT_LIST = `${API_BASE}adminapp/feed_comment/list_comment/`
export const API_DELETE_COMMENT = `${API_BASE}adminapp/feed_comment/delete_comment/`
export const API_DELETE_COMMENT_REPLY = `${API_BASE}adminapp/feed_comment/delete_comment_reply/`


// Category Management
// export const API_GET_CATEGORY_LIST = `${API_BASE}adminapp/feed_category_crud/`
export const API_GET_CATEGORY_INFO = `${API_BASE}adminapp/feed_category_crud/`
export const API_POST_CATEGORY = `${API_BASE}adminapp/feed_category_crud/`
export const API_DELETE_CATEGORY = `${API_BASE}adminapp/feed_category_crud/`
export const API_PATCH_CATEGORY = `${API_BASE}adminapp/feed_category_crud/`


// App Data Management------------------------------------------------
//Interest Management
export const API_GET_INTEREST_LIST = `${API_BASE}adminapp/intrestcrud/`
export const API_POST_INTEREST_ADD = `${API_BASE}adminapp/intrestcrud/`
export const API_DELETE_INTEREST = `${API_BASE}adminapp/intrestcrud/`
export const API_GET_INTEREST_INFO = `${API_BASE}adminapp/intrestcrud/`
export const API_PATCH_INTEREST = `${API_BASE}adminapp/intrestcrud/`

//Industry Management
export const API_GET_INDUSTRY_LIST = `${API_BASE}adminapp/industries_crud/`
export const API_POST_INDUSTRY_ADD = `${API_BASE}adminapp/industries_crud/`
export const API_DELETE_INDUSTRY = `${API_BASE}adminapp/industries_crud/`
export const API_GET_INDUSTRY_INFO = `${API_BASE}adminapp/industries_crud/`
export const API_PATCH_INDUSTRY = `${API_BASE}adminapp/industries_crud/`

//State Management
export const API_GET_STATE_LIST = `${API_BASE}adminapp/state_crud/`
export const API_POST_STATE_ADD = `${API_BASE}adminapp/state_crud/`
export const API_DELETE_STATE = `${API_BASE}adminapp/state_crud/`
export const API_GET_STATE_INFO = `${API_BASE}adminapp/state_crud/`
export const API_PATCH_STATE = `${API_BASE}adminapp/state_crud/`

//Funding Amount Management
export const API_GET_FUNDING_AMOUNT_LIST = `${API_BASE}adminapp/admin_fund_crud/`
export const API_POST_FUNDING_AMOUNT_ADD = `${API_BASE}adminapp/admin_fund_crud/`
export const API_DELETE_FUNDING_AMOUNT = `${API_BASE}adminapp/admin_fund_crud/`
export const API_GET_FUNDING_AMOUNT_INFO = `${API_BASE}adminapp/admin_fund_crud/`
export const API_PATCH_FUNDING_AMOUNT = `${API_BASE}adminapp/admin_fund_crud/`

//LOAN TAG MANAGEMENT
export const API_GET_LOAN_TAG_LIST = `${API_BASE}adminapp/loan_tag_crud/`
export const API_POST_LOAN_TAG_ADD = `${API_BASE}adminapp/loan_tag_crud/`
export const API_DELETE_LOAN_TAG = `${API_BASE}adminapp/loan_tag_crud/`
export const API_GET_LOAN_TAG_INFO = `${API_BASE}adminapp/loan_tag_crud/`
export const API_PATCH_LOAN_TAG = `${API_BASE}adminapp/loan_tag_crud/`

//Term Length Management
export const API_GET_TERM_LENGTH_LIST = `${API_BASE}adminapp/termlength_crud/`
export const API_POST_TERM_LENGTH_ADD = `${API_BASE}adminapp/termlength_crud/`
export const API_DELETE_TERM_LENGTH = `${API_BASE}adminapp/termlength_crud/`
export const API_GET_TERM_LENGTH_INFO = `${API_BASE}adminapp/termlength_crud/`
export const API_PATCH_TERM_LENGTH = `${API_BASE}adminapp/termlength_crud/`

//Buy Rates Management
export const API_GET_BUY_RATE_LIST = `${API_BASE}adminapp/buyrates_crud/`
export const API_POST_BUY_RATE_ADD = `${API_BASE}adminapp/buyrates_crud/`
export const API_DELETE_BUY_RATE = `${API_BASE}adminapp/buyrates_crud/`
export const API_GET_BUY_RATE_INFO = `${API_BASE}adminapp/buyrates_crud/`
export const API_PATCH_BUY_RATE = `${API_BASE}adminapp/buyrates_crud/`

//UpSell Points Management
export const API_GET_UP_SELL_POINT_LIST = `${API_BASE}adminapp/upsellpoints_crud/`
export const API_POST_UP_SELL_POINT = `${API_BASE}adminapp/upsellpoints_crud/`
export const API_DELETE_UP_SELL_POINT = `${API_BASE}adminapp/upsellpoints_crud/`
export const API_GET_UP_SELL_POINT_INFO = `${API_BASE}adminapp/upsellpoints_crud/`
export const API_PATCH_UP_SELL_POINT = `${API_BASE}adminapp/upsellpoints_crud/`
// ----------------------------------------------------------------------


// Review Management
export const API_GET_REVIEW_LIST = `${API_BASE}adminapp/review_list`
export const API_DELETE_REVIEW = `${API_BASE}adminapp/review_delete/`


// CMS Management
export const API_POST_CMS_LIST = `${API_BASE}adminapp/cms/cms_list/`
export const API_CMS_PATCH = `${API_BASE}adminapp/cms/`
export const API_INITIAL_CMS = `${API_BASE}adminapp/cms/`

//ARTICLE MANAGEMENT 
export const API_GET_ARTICLE_LIST = `${API_BASE}adminapp/article_crud/`
export const API_REPORTED_ARTICLE_LIST = `${API_BASE}adminapp/reported_article/reported_article_list/`
// export const API_POST_ARTICLE = `${API_BASE}adminapp/create_article/`
// export const API_DELETE_ARTICLE = `${API_BASE}adminapp/article_crud/`
// export const API_GET_ARTICLE_INFO = `${API_BASE}adminapp/article_crud/`
// export const API_PATCH_ARTICLE = `${API_BASE}adminapp/article_update/update_article/`

// ARTICLE COMMENT
export const API_GET_ARTICLE_COMMENT_LIST = `${API_BASE}adminapp/article_comment/get_article_comment_details/`
export const API_DELETE_ARTICLE_COMMENT = `${API_BASE}adminapp/article_comment/delete_article_comment/`
export const API_DELETE_ARTICLE_COMMENT_REPLY = `${API_BASE}adminapp/article_comment/delete_article_comment_reply/`

//Forum MANAGEMENT 
export const API_GET_FORUM_LIST = `${API_BASE}allpostapp/manage_forum/admin_list_forum/`
export const API_GET_FORUM_INFO = `${API_BASE}allpostapp/manage_forum/get_forum_details/`
export const API_ADD_FORUM = `${API_BASE}allpostapp/manage_forum/create_forum/`
export const API_UPDATE_FORUM = `${API_BASE}allpostapp/manage_forum/update_forum/`
export const API_DELETE_FORUM = `${API_BASE}allpostapp/manage_forum/delete_forum/`
export const API_REPORTED_FORUM_LIST = `${API_BASE}allpostapp/manage_forum/list_reported_forum/`


// Forum comment
export const API_GET_FORUM_COMMENT_LIST = `${API_BASE}allpostapp/manage_forum/get_forum_comment_list/`
export const API_DELETE_FORUM_COMMENT = `${API_BASE}allpostapp/manage_comment_forum/delete_forum_comment/`
export const API_DELETE_FORUM_COMMENT_REPLY = `${API_BASE}allpostapp/manage_comment_forum/delete_forum_comment_reply/`

//LOAN MANAGEMENT
export const API_GET_LOAN_LIST = `${API_BASE}adminapp/loan_list`

//Push Notification 
export const API_PUSH_NOTIFICATION = `${API_BASE}adminapp/admin_notification/custom_notification/`