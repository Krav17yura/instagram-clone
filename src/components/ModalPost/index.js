import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import {Link} from "react-router-dom";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import './style.css'


const useStyle = makeStyles(() => ({
    postDialog: {
     "& .MuiDialog-paperWidthSm":{
         maxWidth:'90vw'
     }
    }
}))

export const ModalPost = (props) => {
    const classes = useStyle();
    const {user, isOpen, handleClose} = props

    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                className={classes.postDialog}
            >
                <div className="modalPostContainer">
                    <div className="modalPostImgContainer">
                        <img
                            src="https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/117724409_597533534287744_8720157817267081373_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=kjlOUGbFTtwAX_qV3vh&tp=1&oh=9ad638c60ec5ed089d2cc192a27f6850&oe=6031047C"
                            alt="img"/>
                    </div>
                    <div className="modalPostCommentContainer">
                        <div className={"modalPostCommentHeader"}>
                            <div className={'modalPostUser'}>
                                <Avatar style={{width: 35, height: 35}} src={user && user.photoURL}/>
                                <div className={'modalPostUserUserInfo'}>
                                    <Link to={'/home/currentUser'}>krav_yura</Link>
                                    <span>Епіфан</span>
                                </div>
                            </div>
                            <div>
                              <IconButton style={{padding:5}}>
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

            </Dialog>
        </div>
    );
}