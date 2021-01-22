import {all} from 'redux-saga/effects'
import {authSaga} from "./auth/saga";
import {userListSaga} from "./userList/saga";

export default function* rootSaga(){
    yield all([
        authSaga(),
        userListSaga()
    ])
}