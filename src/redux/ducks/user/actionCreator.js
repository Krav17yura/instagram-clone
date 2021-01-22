import {SHOW_CURRENT_USER_REQUEST, SHOW_CURRENT_USER_SUCCESS} from "./actionTypes";
import {transformUserData} from "../../../helpers";
import {projectFirestore} from "../../../firebase-config";
import {getUsers} from "../userList/actionCreators";


export const showCurrentUserRequest = () => ({
        type: SHOW_CURRENT_USER_REQUEST
    }
);

export const showCurrentUserSuccess = user => ({
        type: SHOW_CURRENT_USER_SUCCESS, payload: user
    });

export const  fetchCurrentUser =  () => async (dispatch, getState, firebase) => {
    const {isAuthenticated} = getState().reAuth;

    if (!isAuthenticated) {
        dispatch(showCurrentUserSuccess(null));
        return Promise.resolve({});
    }

    const currentUser = firebase.auth().currentUser;

    let currentUserInFirestore= []
    await projectFirestore.collection('users').where("id", '==', currentUser.uid).get()
        .then(querySnapshot => {
           querySnapshot.forEach(doc => (
               currentUserInFirestore.push(doc.data())
           ))
            dispatch(getUsers())
        })
        .catch(e => {
            console.log("Error getting cached document:", e);
        })

    return Promise.resolve(dispatch(showCurrentUserSuccess(transformUserData(currentUser, currentUserInFirestore))));
};