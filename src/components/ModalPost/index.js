import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import {Link} from "react-router-dom";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import './style.css'
import {useSelector} from "react-redux";
import {AppLoading} from "../AppLoading";
import AppError from "../AppError";


const useStyle = makeStyles(() => ({
    postDialog: {
        "& .MuiDialog-paperWidthSm": {
            maxWidth: '90vw'
        }
    }
}))

export const ModalPost = (props) => {
    const classes = useStyle();
    const { isOpen, handleClose} = props
    const {selectedUserPost, selectedUserPostInProgress, selectedUserPostError} = useSelector(state => state.reSelectedUser)

    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                className={classes.postDialog}
            >
                {!selectedUserPostError ? <>
                    {!selectedUserPostInProgress ? <>
                        <div className="modalPostContainer">
                            <div className="modalPostImgContainer">
                                <img
                                    src={selectedUserPost && selectedUserPost[0].urlPic}
                                    alt="img"/>
                            </div>
                            <div className="modalPostCommentContainer">
                                <div className={"modalPostCommentHeader"}>
                                    <div className={'modalPostUser'}>
                                        <Avatar style={{width: 35, height: 35}} src={selectedUserPost && selectedUserPost[0].currentUser.photoURL}/>
                                        <div className={'modalPostUserUserInfo'}>
                                            <Link to={'/home/currentUser'}>{selectedUserPost && selectedUserPost[0].currentUser.nickName}</Link>
                                            <span>{selectedUserPost && selectedUserPost[0].currentUser.displayName}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <IconButton style={{padding: 5}}>
                                            <MoreHorizIcon/>
                                        </IconButton>
                                    </div>
                                </div>
                                <div className="modalPostCommentBlock">
                                    <form>
                                        <div className={'postCommentInputBlock'}>
                                            <input type="text" placeholder={'Додайте коментар...'}/>
                                        </div>
                                        <button disabled>Опублікувати</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </> : <AppLoading/>}
                </> : <AppError/>}
            </Dialog>
        </div>
    );
}