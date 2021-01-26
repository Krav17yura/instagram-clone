import {put, takeEvery, call} from "redux-saga/effects";
import {projectAuth, projectFirestore} from '../../../firebase-config'
import {APP_LOGIN, APP_LOGOUT, APP_SIGNUP} from "./actionTypes";
import {
    loginError,
    loginRequest,
    loginSuccess, logoutError,
    logoutRequest, logoutSuccess,
    signupError,
    signupRequest,
    signupSuccess
} from "./actionCreator";
import {showCurrentUserSuccess} from "../currentUser/actionCreator";


export function* appLoginRequest({payload}) {
    try {
        const {email, password, history} = payload
        yield put(loginRequest())
        yield call([projectAuth, projectAuth.signInWithEmailAndPassword], email, password)
        yield put(loginSuccess())
        yield put(history.push('/home'))
    } catch (e) {
        yield put(loginError(e))
    }
}

export function* appSignupRequest({payload}) {
    try {
        yield put(signupRequest())
        const {email, password, fullName, logoUrl, nickName, history} = payload;
        const createUser = yield call([projectAuth, projectAuth.createUserWithEmailAndPassword], email, password)
        yield createUser.user.updateProfile({displayName: fullName, photoURL: logoUrl})
        yield projectFirestore.collection("users").add({nickName: nickName, name: fullName, id: createUser.user.uid, photo: logoUrl})
        yield put(signupSuccess())
        yield put(history.push('/home'))
    } catch (e) {
        yield put(signupError(e))
    }
}

export function* appLogoutRequest() {
    try {
        yield put(logoutRequest())
        yield call([projectAuth, projectAuth.signOut])
        yield put(logoutSuccess())
        yield put(showCurrentUserSuccess(null))

    } catch (e) {
      yield put(logoutError(e))
    }
}


export function* authSaga() {
    yield takeEvery(APP_LOGIN, appLoginRequest);
    yield takeEvery(APP_SIGNUP, appSignupRequest);
    yield takeEvery(APP_LOGOUT, appLogoutRequest);
}

