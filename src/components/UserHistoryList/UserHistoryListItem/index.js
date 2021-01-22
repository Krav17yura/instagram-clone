import React from "react";
import Avatar from "@material-ui/core/Avatar";
import './style.css'

export const UserHistoryListItem = props => {
    const {photo, nickName} = props
    return(
        <li className={'userHistoryListItem'}>
            <Avatar style={{width: 55, height: 55}}
                    src={photo}/>
            <span>{nickName}</span>
        </li>
    )
}