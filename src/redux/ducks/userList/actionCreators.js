import {GET_USER_LIST, GET_USER_LIST_ERROR, GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS} from "./actionTypes";

export const getUsers = () => {
    return{
        type: GET_USER_LIST
    }
}

export const getUsersRequest = () => {
    return{
        type: GET_USER_LIST_REQUEST
    }
}

export const getUsersError = payload => {
    return{
        type: GET_USER_LIST_ERROR,
        payload
    }
}

export const getUsersSuccess = payload => {
    return{
        type: GET_USER_LIST_SUCCESS,
        payload
    }
}