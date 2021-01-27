import React from "react";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import {Link} from "react-router-dom";

import './style.css'

export const PostListItem = props => {
    const {description, urlPic, currentUser} = props
    return(
        <li className="postListItem">
            <div className="post">
                <div className="postHeader">
                    <div className='postHeaderUserInfo'>
                        <Avatar
                            src={currentUser.photoURL}
                        />
                        <Link to={`/home/currentUser/${currentUser.uid}`}>{currentUser.nickName}</Link>
                    </div>
                    <div className="postHeaderButton">
                        <IconButton size={"small"}>
                            <MoreHorizIcon fontSize="inherit"/>
                        </IconButton>
                    </div>
                </div>
                <div className="postMedia">
                    <img
                        src={urlPic}
                        alt="post"
                    />
                </div>
                <div className="postFooter">
                    <div className="postFooterButtons">
                        <div className="postFooterMainButtons">
                            <ul className="postFooterButtonList">
                                <li className="postFooterButtonListItem">
                                    <IconButton>
                                        <FavoriteBorderIcon/>
                                    </IconButton>
                                    <IconButton>
                                        <ModeCommentOutlinedIcon/>
                                    </IconButton>
                                    <IconButton>
                                        <SendOutlinedIcon/>
                                    </IconButton>
                                </li>
                            </ul>
                        </div>
                        <IconButton>
                            <BookmarkBorderOutlinedIcon/>
                        </IconButton>
                    </div>
                    <div className="postCountView">
                        10 вподобань
                    </div>
                    <div className="postDescription">
                        <Link to={`/home/currentUser/${currentUser.uid}`}>{currentUser.nickName}</Link>
                        <span>{ description}</span>

                    </div>
                    <div className="postCommentBlock">
                        <form>
                            <div className={'postCommentInputBlock'}>
                                <input type="text" placeholder={'Додайте коментар...'}/>
                            </div>

                            <button disabled>Опублікувати</button>
                        </form>
                    </div>
                </div>
            </div>
        </li>
    )
}