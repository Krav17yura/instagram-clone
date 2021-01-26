import {APP_GET_POSTS, GET_POSTS_ERROR, GET_POSTS_REQUEST, GET_POSTS_SUCCESS} from "./actionTypes";

export const getPosts = () => {
    return {
        type: APP_GET_POSTS
    }
}

export const getPostsRequest = () => {
    return {
        type: GET_POSTS_REQUEST
    }
}

export const getPostsSuccess = payload => {
    return{
        type: GET_POSTS_SUCCESS,
        payload
    }
}

export const getPostsError = payload => {
    return {
        type: GET_POSTS_ERROR,
        payload
    }
}
