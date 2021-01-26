import {put, takeEvery, select} from "redux-saga/effects";
import {GET_USER_LIST} from "./actionTypes";
import {projectFirestore} from "../../../firebase-config";
import {getUsersError, getUsersRequest, getUsersSuccess} from "./actionCreators";
import {selectCurrentUser} from "../currentUser/selectors";

export function* getUserListRequest(){
    let data = [];
    let user = yield select(selectCurrentUser)
    try {
        yield put(getUsersRequest())
        yield projectFirestore.collection('users').get().then((querySnapshot) => {
            querySnapshot.forEach(doc => (doc.data().id !== user.uid)? data.push(doc.data()) : null)
        })
        yield put(getUsersSuccess(data))
    }catch (e){
      yield put(getUsersError(e))
    }
}


export function* userListSaga(){
    yield takeEvery(GET_USER_LIST, getUserListRequest)
}