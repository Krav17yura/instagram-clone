import {GET_USER_LIST_ERROR, GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS} from "./actionTypes";


const reUserList = (state = {
    userList: [],
    recommendationUserList: [],
    getUserListInProgress: false,
    getUserListError: null
}, action) => {

    switch (action.type) {
        case GET_USER_LIST_REQUEST:
            return {
                ...state,
                getUserListInProgress: true,
                getUserListError: null
            }
        case GET_USER_LIST_ERROR:
            return {
                getUserListInProgress: false,
                getUserListError: action.payload
            }
        case GET_USER_LIST_SUCCESS:
            return {
                userList: action.payload,
                recommendationUserList: action.payload.slice(0, 5),
                getUserListInProgress: true,
                getUserListError: null
            }
        default:
            return state;
    }
}

export default reUserList;