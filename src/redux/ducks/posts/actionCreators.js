import {ADD_POST_ERROR, ADD_POST_REQUEST, ADD_POST_SUCCESS, APP_ADD_POST, IS_OPEN_ADD_POST_MODAL} from "./actionTypes";

export const addPost = payload => {
    console.log(payload)
    return{
        type: APP_ADD_POST,
        payload
    }
}

export const addPostRequest = () => {
    return{
        type: ADD_POST_REQUEST
    }
}

export const addPostSuccess = () => {
    return{
        type: ADD_POST_SUCCESS
    }
}

export const addPostError = payload => {
    return{
        type: ADD_POST_ERROR,
        payload
    }
}

export const toggleAddPostModal = payload => {
    return{
        type: IS_OPEN_ADD_POST_MODAL,
        payload
    }
}