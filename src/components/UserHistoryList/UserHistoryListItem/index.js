import React from "react";
import Avatar from "@material-ui/core/Avatar";
import './style.css'
import {Link} from "react-router-dom";

export const UserHistoryListItem = props => {
    const {photo, nickName, id} = props
    return (
        <li className={'userHistoryListItem'}>
                <Avatar style={{width: 55, height: 55}}
                        src={photo}/>
            <Link to={id ? `/home/currentUser/${id}` : '/home/currentUser'}>
               {nickName}
            </Link>
        </li>
    )
}