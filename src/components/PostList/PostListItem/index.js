import React from "react";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";

export const PostListItem = props => {
    const {userNickName, userPhotoUrl, post} = props
    return(
        <li className="postListItem">
            <div className="post">
                <div className="postHeader">
                    <div className='postHeaderUserInfo'>
                        <Avatar
                            src={userPhotoUrl}
                        />
                        <a href={'#'}>{userNickName}</a>
                    </div>
                    <div className="postHeaderButton">
                        <IconButton size={"small"}>
                            <MoreHorizIcon fontSize="inherit"/>
                        </IconButton>
                    </div>
                </div>
                <div className="postMedia">
                    <img
                        src={post.postImg}
                        alt="image"
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
                        {post.like} вподобань
                    </div>
                    <div className="postDescription">
                        <a href={'#'}>{userNickName}</a>
                        {post.description}
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