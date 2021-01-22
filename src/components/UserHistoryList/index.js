import React from "react";

import Avatar from "@material-ui/core/Avatar";
import {UserHistoryListItem} from "./UserHistoryListItem";

import './style.css'
import {useSelector} from "react-redux";


export const UserHistoryList = () => {
    const userList = useSelector(state => state.reUserList.userList)
    return (
        <div className={'mainSideHomePage'}>
            <div className="userHistoryBlock">
                <ul className="userHistoryList">

                    {userList && userList.map(item => (
                        <UserHistoryListItem
                            key={item.id}
                            {...item}
                        />
                    ))}

                    <li className={'userHistoryListItem'}>
                        <Avatar style={{width: 55, height: 55}}/>
                        <span>dank__holm</span>
                    </li>
                    <li className={'userHistoryListItem'}>
                        <Avatar style={{width: 55, height: 55}}/>
                        <span>mark_druk</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}