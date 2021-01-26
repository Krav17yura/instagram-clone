import {
    APP_GET_SELECTED_USER, APP_GET_SELECTED_USER_POST,
    APP_GET_SELECTED_USER_POST_LIST,
    GET_SELECTED_USER_ERROR, GET_SELECTED_USER_POST_ERROR,
    GET_SELECTED_USER_POST_LIST_ERROR,
    GET_SELECTED_USER_POST_LIST_REQUEST,
    GET_SELECTED_USER_POST_LIST_SUCCESS, GET_SELECTED_USER_POST_REQUEST, GET_SELECTED_USER_POST_SUCCESS,
    GET_SELECTED_USER_REQUEST,
    GET_SELECTED_USER_SUCCESS
} from "./actionTypes";


// get selected user
export const getSelectedUser = payload => {
    return {
        type: APP_GET_SELECTED_USER,
        payload
    }
}

export const getSelectedUserRequest = () => {
    return {
        type: GET_SELECTED_USER_REQUEST
    }
}

export const getSelectedUserError = payload => {
    return {
        type: GET_SELECTED_USER_ERROR,
        payload
    }
}

export const getSelectedUserSuccess = payload => {
    return {
        type: GET_SELECTED_USER_SUCCESS,
        payload
    }
}




// Get selected user post list
export const getSelectedUserPostList = payload => {
    return{
        type: APP_GET_SELECTED_USER_POST_LIST,
        payload
    }
}

export const getSelectedUserPostListRequest = () => {
    return{
        type: GET_SELECTED_USER_POST_LIST_REQUEST
    }
}

export const getSelectedUserPostListError = payload => {
    return{
        type: GET_SELECTED_USER_POST_LIST_ERROR,
        payload
    }
}

export const getSelectedUserPostListSuccess = payload => {
    return{
        type: GET_SELECTED_USER_POST_LIST_SUCCESS,
        payload
    }
}



// Get selected user post


export const getSelectedUserPost = payload => {
    return{
        type: APP_GET_SELECTED_USER_POST,
        payload
    }
}

export const getSelectedUserPostRequest = () => {
    return{
        type: GET_SELECTED_USER_POST_REQUEST
    }
}

export const getSelectedUserPostError = payload => {
    return{
        type: GET_SELECTED_USER_POST_ERROR,
        payload
    }
}

export const getSelectedUserPostSuccess = payload => {
    return{
        type: GET_SELECTED_USER_POST_SUCCESS,
        payload
    }
}