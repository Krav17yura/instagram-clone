import React from "react";
import Avatar from "@material-ui/core/Avatar";
import './style.css'

export const UserHistoryListItem = ({nickName, photoURL}) => {
    return(
        <li className={'userHistoryListItem'}>
            <Avatar style={{width: 55, height: 55}}
                    src={photoURL}/>
            <span>{nickName}</span>
        </li>
    )
}