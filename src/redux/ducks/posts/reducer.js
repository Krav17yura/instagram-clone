import {ADD_POST_ERROR, ADD_POST_REQUEST, ADD_POST_SUCCESS, IS_OPEN_ADD_POST_MODAL} from "./actionTypes";

const rePosts = (state = {
    addPostInProgress: false,
    addPostError: null,
    isOpenAddPostModal: false
}, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostInProgress: true,
                addPostError: null
            };

        case ADD_POST_ERROR:
            return {
                ...state,
                addPostInProgress: false,
                addPostError: action.payload
            }

        case ADD_POST_SUCCESS:
            return {
                ...state,
                addPostInProgress: false,
                addPostError: null
            }
        case IS_OPEN_ADD_POST_MODAL:
            return {
                ...state,
                isOpenAddPostModal: action.payload
            }
        default:
            return state;
    }
};

export default rePosts;