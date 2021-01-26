import {put, takeEvery} from "redux-saga/effects";
import {APP_GET_SELECTED_USER, APP_GET_SELECTED_USER_POST, APP_GET_SELECTED_USER_POST_LIST} from "./actionTypes";
import {
    getSelectedUserError,
    getSelectedUserPostError,
    getSelectedUserPostListError,
    getSelectedUserPostListRequest,
    getSelectedUserPostListSuccess,
    getSelectedUserPostRequest, getSelectedUserPostSuccess,
    getSelectedUserRequest,
    getSelectedUserSuccess
} from "./actionCreators";
import {projectFirestore} from "../../../firebase-config";

export function* appGetSelectedUserRequest({payload}) {
    const collectionRef = projectFirestore.collection('users');
    let selectedUser = [];

    try {
        yield put(getSelectedUserRequest())
        yield collectionRef.where("id", '==', payload).get().then((querySnapshot) => {
            querySnapshot.forEach(doc => selectedUser.push(doc.data()))
        })
        yield put(getSelectedUserSuccess(selectedUser))
    } catch (e) {
        yield put(getSelectedUserError(e))
    }
}

export function* appGetSelectedUserPostList({payload}) {
    const collectionRef = projectFirestore.collection('posts');
    let selectedUserPostList = [];
    try {
        yield put(getSelectedUserPostListRequest())
        yield collectionRef.where('currentUserId', '==', payload).get().then((querySnapshot) => {
            querySnapshot.forEach(doc => selectedUserPostList.unshift(doc.data()))
        })
        yield put(getSelectedUserPostListSuccess(selectedUserPostList))
    } catch (e) {
        yield put(getSelectedUserPostListError(e))
    }
}


export function* appGetSelectedUserPost({payload}) {
    const collectionRef = projectFirestore.collection('posts');
    let selectedUserPost = [];
    try {
        yield put(getSelectedUserPostRequest())
        yield collectionRef.where('postId', '==', payload).get().then((querySnapshot) => {
            querySnapshot.forEach(doc => selectedUserPost.push(doc.data()))
        })
        yield put(getSelectedUserPostSuccess(selectedUserPost))
    } catch (e) {
        yield put(getSelectedUserPostError(e))
    }
}


export function* selectedUserSaga() {
    yield takeEvery(APP_GET_SELECTED_USER, appGetSelectedUserRequest);
    yield takeEvery(APP_GET_SELECTED_USER_POST_LIST, appGetSelectedUserPostList)
    yield takeEvery(APP_GET_SELECTED_USER_POST, appGetSelectedUserPost)
}