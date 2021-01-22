import {combineReducers} from "redux";
import reAuth from "./ducks/auth/reducer";
import reUser from "./ducks/user/reducer";
import reUserList from "./ducks/userList/reducer";

const rootReducer = combineReducers({
    reAuth,
    reUser,
    reUserList
})

export default rootReducer