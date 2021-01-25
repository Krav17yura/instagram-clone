import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import {IconButton, makeStyles} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import './style.css'

import {UploadPostForm} from "../forms/UploadPostForm";

const useStyle = makeStyles(() => ({
    dialog: {
        "& .MuiDialog-paper":{
            margin: 0
        }
    }
}))

export const AddPostModal = props => {
    const classes = useStyle();
    const {open, handleClose} = props

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                className={classes.dialog}
            >
                <div className={'addPostModalHeaderBlock'}>
                    <DialogTitle id="responsive-dialog-title">{"Додати новий пост"}</DialogTitle>
                    <IconButton style={{color: 'white'}}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                <div className="addPostModalContentBlock">
                    <UploadPostForm/>
                </div>
            </Dialog>
        </div>
    );
}