import React from "react";

import {UserHistoryListItem} from "./UserHistoryListItem";

import './style.css'
import {useSelector} from "react-redux";
import {AppLoading} from "../AppLoading";
import AppError from "../AppError";


export const UserHistoryList = () => {
    const {userList, getUserListInProgress, getUserListError} = useSelector(state => state.reUserList)

    return (
        <div className={'mainSideHomePage'}>
            <div className="userHistoryBlock">
                <ul className="userHistoryList">
                    {!getUserListError ? <>
                        {getUserListInProgress ? <>
                            {userList && userList.map(item => (
                                <UserHistoryListItem
                                    key={item.id}
                                    {...item}
                                />
                            ))}

                        </> : <AppLoading/>}

                    </> : <AppError/>}
                </ul>
            </div>
        </div>
    )
}