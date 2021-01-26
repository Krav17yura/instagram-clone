import {all} from 'redux-saga/effects'
import {authSaga} from "./auth/saga";
import {userListSaga} from "./userList/saga";
import {addPost} from "./addPost/saga";
import {postListSaga} from "./postList/saga";

export default function* rootSaga(){
    yield all([
        authSaga(),
        userListSaga(),
        addPost(),
        postListSaga()
    ])
}