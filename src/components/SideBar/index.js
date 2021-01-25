import React from 'react'

import Avatar from "@material-ui/core/Avatar";

import {Link} from "react-router-dom";

import './style.css'
import {SideBarRecommendationList} from "./sideBarRecommendationList";
import {AppLoading} from "../AppLoading";


export const SideBar = ({currentUser}) => {

    return (
        <div className={'sideBarHomePage'}>
            <div className={'sideBarContainer'}>
                <div className={"sideBarHeader"}>
                    {currentUser ?
                        <>
                            <div className={'sideBarUser'}>
                                <Avatar style={{width: 60, height: 60}} src={currentUser && currentUser.photoURL}/>
                                <div className={'sideBarUserInfo'}>
                                    <Link to={'/home/user'}>{currentUser && currentUser.nickName}</Link>
                                    <span>{currentUser && currentUser.displayName}</span>
                                </div>
                            </div>
                            <div className={'sideBarLink'}>
                                <Link to={'/home/user'}>Перейти</Link>
                            </div>
                        </>
                        : <AppLoading/>}

                </div>
                <SideBarRecommendationList/>
            </div>
        </div>
    )
}