import {GET_POSTS_ERROR, GET_POSTS_REQUEST, GET_POSTS_SUCCESS} from "./actionTypes";

const rePostList = (state = {

    postsList: [],
    getPostsError: null,
    getPostsInProgress: false

}, action) => {
    switch (action.type) {
        case GET_POSTS_REQUEST:
            return {
                ...state,
                getPostsInProgress: true,
                getPostsError: null
            };

        case GET_POSTS_ERROR:
            return {
                ...state,
                getPostsInProgress: false,
                getPostsError: action.payload
            }

        case GET_POSTS_SUCCESS:
            return {
                ...state,
                postsList: action.payload,
                getPostsInProgress: false,
                getPostsError: null
            }
        default:
            return state;
    }
};

export default rePostList;