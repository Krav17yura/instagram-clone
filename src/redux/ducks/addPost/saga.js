import {put, takeEvery} from "redux-saga/effects";
import {APP_ADD_POST} from "./actionTypes";
import {addPostError, addPostRequest, addPostSuccess, toggleAddPostModal} from "./actionCreators";
import {projectFirestore, projectStorage, timestamp} from "../../../firebase-config";
import {getPosts} from "../postList/actionCreators";

export function* appAddPostRequest({payload}) {
    const {description, picture, currentUser} = payload
    const storageRef = projectStorage.ref(picture[0].name)
    const collectionRef = projectFirestore.collection('posts');



    try {
        yield put(addPostRequest())
        yield storageRef.put(picture[0])
        const urlPic = yield storageRef.getDownloadURL()
        const createdAt = yield timestamp();
        yield collectionRef.add({ urlPic, createdAt, description, currentUser, currentUserId: currentUser.uid });
        yield put(addPostSuccess())
        yield put(getPosts())
        yield put(toggleAddPostModal(false))

    } catch (e) {
        yield put(addPostError(e))
    }
}

export function* addPost() {
    yield takeEvery(APP_ADD_POST, appAddPostRequest)
}