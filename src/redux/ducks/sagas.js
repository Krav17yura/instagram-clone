import {all} from 'redux-saga/effects'
import {authSaga} from "./auth/saga";
import {userListSaga} from "./userList/saga";
import {postsSaga} from "./posts/saga";

export default function* rootSaga(){
    yield all([
        authSaga(),
        userListSaga(),
        postsSaga()
    ])
}