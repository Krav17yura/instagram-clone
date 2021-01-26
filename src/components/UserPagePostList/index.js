import React from 'react'

import './style.css'
import {UserPagePostListItem} from "./UserPagePostListItem";
import {ModalPost} from "../ModalPost";
import {useDispatch, useSelector} from "react-redux";
import {AppLoading} from "../AppLoading";
import AppError from "../AppError";
import {getSelectedUserPost, getSelectedUserPostSuccess} from "../../redux/ducks/selectedUser/actionCreators";


export const UserPagePostList = () => {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    const {currentUser} = useSelector(state => state.reUser);
    const {selectedUserPostList, selectedUserPostListInProgress, selectedUserPostListError} = useSelector(state => state.reSelectedUser)


    const handleClickOpen = id => {
        setOpen(true);
        dispatch(getSelectedUserPost(id))
    };

    const handleClose = () => {
        setOpen(false);
        dispatch(getSelectedUserPostSuccess(null))
    };


    return (
        <div className="userPagePostListContainer">
            {!selectedUserPostListError ? <>
                {!selectedUserPostListInProgress ? <>
                    {selectedUserPostList && selectedUserPostList.length > 0 ? <>
                        <ul className="userPagePostList">
                            {selectedUserPostList && selectedUserPostList.map((item) => (
                                <UserPagePostListItem
                                    key={item.postId}
                                    handleClickOpen={handleClickOpen}
                                    photo={item.urlPic}
                                    postId={item.postId}
                                />
                            ))}
                        </ul>
                        <ModalPost user={currentUser} isOpen={open} handleClose={handleClose}/>
                    </> : <h3>Немає жодного допису</h3>}
                </> : <AppLoading/>}
            </> : <AppError/>}
        </div>
    )
}