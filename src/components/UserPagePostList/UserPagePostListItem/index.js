import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

import './style.css'

export const UserPagePostListItem = props => {
    const {handleClickOpen, comment, likes, photo} = props
    return(
        <li className="userPagePostListItem">
            <div className="userPagePostListItemContainer" onClick={handleClickOpen}>
                <img
                    src={photo}
                    alt="img"/>
                <div className="userPagePostListItemContainerBackdrop">
                    <span><FavoriteIcon/> {likes} </span>
                    <span><ChatBubbleIcon/> {comment} </span>
                </div>
            </div>
        </li>
    )
}