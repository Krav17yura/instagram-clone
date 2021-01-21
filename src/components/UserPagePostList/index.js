import React from 'react'

import './style.css'
import {userPagePosts} from "../../constants";
import {UserPagePostListItem} from "./UserPagePostListItem";
import {ModalPost} from "../ModalPost";
import {useSelector} from "react-redux";


export const UserPagePostList = props => {
    const [open, setOpen] = React.useState(false);
    const {currentUser} = useSelector(state => state.reUser);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="userPagePostListContainer">
            <ul className="userPagePostList">
                {userPagePosts && userPagePosts.map((item) => (
                    <UserPagePostListItem
                        key={item.id}
                        likes={item.like}
                        comment={item.comment}
                        handleClickOpen={handleClickOpen}
                        photo={item.photo}
                    />
                ))}
            </ul>
            <ModalPost user={currentUser} isOpen={open} handleClose={handleClose}/>
        </div>
    )
}