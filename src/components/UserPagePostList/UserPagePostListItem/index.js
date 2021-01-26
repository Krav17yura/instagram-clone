import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

import './style.css'

export const UserPagePostListItem = props => {
    const {handleClickOpen, photo, postId} = props
    return (
        <li className="userPagePostListItem">
            <div className="userPagePostListItemContainer" onClick={() => handleClickOpen(postId)}>
                <div className={'userPagePostListItemImgContainer'}>
                    <img
                        src={photo}
                        alt="img"/>
                </div>
                <div className="userPagePostListItemContainerBackdrop">
                    <span><FavoriteIcon/> 55 </span>
                    <span><ChatBubbleIcon/> 1 </span>
                </div>
            </div>
        </li>
    )
}