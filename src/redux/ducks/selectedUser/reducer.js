import {
    GET_SELECTED_USER_ERROR,
    GET_SELECTED_USER_POST_ERROR,
    GET_SELECTED_USER_POST_LIST_ERROR,
    GET_SELECTED_USER_POST_LIST_REQUEST,
    GET_SELECTED_USER_POST_LIST_SUCCESS,
    GET_SELECTED_USER_POST_REQUEST,
    GET_SELECTED_USER_POST_SUCCESS,
    GET_SELECTED_USER_REQUEST,
    GET_SELECTED_USER_SUCCESS
} from "./actionTypes";


const reSelectedUser = (state = {
    selectedUser: null,
    selectedUserInProgress: false,
    selectedUserError: null,

    selectedUserPostList: null,
    selectedUserPostListInProgress: false,
    selectedUserPostListError: null,

    selectedUserPost: null,
    selectedUserPostInProgress: false,
    selectedUserPostError: null

}, action) => {
    switch (action.type) {
        case GET_SELECTED_USER_REQUEST:
            return {
                ...state,
                selectedUserInProgress: true,
                selectedUserError: null
            };
        case GET_SELECTED_USER_ERROR:
            return {
                ...state,
                selectedUserInProgress: false,
                selectedUserError: action.payload
            }
        case GET_SELECTED_USER_SUCCESS:
            return {
                ...state,
                selectedUser: action.payload,
                selectedUserInProgress: false,
                selectedUserError: null
            }


        case GET_SELECTED_USER_POST_LIST_REQUEST:
            return {
                ...state,
                selectedUserPostListInProgress: true,
                selectedUserPostListError: null
            }
        case GET_SELECTED_USER_POST_LIST_ERROR:
            return {
                ...state,
                selectedUserPostListInProgress: false,
                selectedUserPostListError: action.payload
            }
        case GET_SELECTED_USER_POST_LIST_SUCCESS:
            return {
                ...state,
                selectedUserPostList: action.payload,
                selectedUserPostListInProgress: false,
                selectedUserPostListError: null
            }


        case GET_SELECTED_USER_POST_REQUEST:
            return {
                ...state,
                selectedUserPostInProgress: true,
                selectedUserPostError: null
            }
        case GET_SELECTED_USER_POST_ERROR:
            return {
                ...state,
                selectedUserPostInProgress: false,
                selectedUserPostError: action.payload
            }
        case GET_SELECTED_USER_POST_SUCCESS:
            return {
                ...state,
                selectedUserPost: action.payload,
                selectedUserPostInProgress: false,
                selectedUserPostError: null
            }
        default :
            return state
    }
}

export default reSelectedUser;