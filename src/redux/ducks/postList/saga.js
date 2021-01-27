import {put, takeEvery} from "redux-saga/effects";
import {APP_GET_POSTS} from "./actionTypes";
import {getPostsError, getPostsRequest, getPostsSuccess} from "./actionCreators";
import {projectFirestore} from "../../../firebase-config";


export function* appGetPostsRequest() {
    let postsList = [];
    try {
        yield put(getPostsRequest())
        yield projectFirestore.collection('posts').orderBy('createdAt').get().then((querySnapshot) => {

            querySnapshot.forEach(doc => {
                    const {description, createdAt, currentUser, urlPic} = doc.data()
                    const postId = doc.id
                    postsList.unshift({description, createdAt, currentUser, urlPic, postId})
                }
            )
        })
        yield put(getPostsSuccess(postsList))
    } catch (e) {
        yield put(getPostsError(e))
    }
}


export function* postListSaga() {
    yield takeEvery(APP_GET_POSTS, appGetPostsRequest)
}