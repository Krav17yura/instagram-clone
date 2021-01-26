import {combineReducers} from "redux";
import reAuth from "./ducks/auth/reducer";
import reUser from "./ducks/currentUser/reducer";
import reUserList from "./ducks/userList/reducer";
import rePostList from "./ducks/postList/reducer";
import reAddPost from "./ducks/addPost/reducer";
import reSelectedUser from "./ducks/selectedUser/reducer";

const rootReducer = combineReducers({
    reAuth,
    reUser,
    reUserList,
    rePostList,
    reAddPost,
    reSelectedUser
})

export default rootReducer