import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import {IconButton, makeStyles} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import './style.css'

import {UploadPostForm} from "../forms/UploadPostForm";
import {addPost} from "../../redux/ducks/addPost/actionCreators";
import {useDispatch, useSelector} from "react-redux";

const useStyle = makeStyles(() => ({
    dialog: {
        "& .MuiDialog-paper":{
            margin: 0
        }
    }
}))

export const AddPostModal = props => {
    const {currentUser} = useSelector(state => state.reUser)
    const {addPostInProgress, addPostError} = useSelector(state => state.reAddPost)
    const dispatch = useDispatch();
    const classes = useStyle();
    const {open, handleClose} = props


    const handleSubmitAddPostForm = value => {
        const {description, picture} = value
        dispatch(addPost({description, picture, currentUser}))
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={() => handleClose(false)}
                aria-labelledby="responsive-dialog-title"
                className={classes.dialog}
            >
                <div className={'addPostModalHeaderBlock'}>
                    <DialogTitle id="responsive-dialog-title">{"Додати новий пост"}</DialogTitle>
                    <IconButton style={{color: 'white'}} onClick={() => handleClose(false)}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                <div className="addPostModalContentBlock">
                    <UploadPostForm onSubmit={handleSubmitAddPostForm} inProgress={addPostInProgress} onError={addPostError}/>
                </div>
            </Dialog>
        </div>
    );
}