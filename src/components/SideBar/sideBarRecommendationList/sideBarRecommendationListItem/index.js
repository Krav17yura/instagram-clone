import React from "react";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";

export const SideBarRecommendationListItem = props => {
    const {photo, nickName} = props
    return (
        <li className={'recommendationListItem'}>
            <div className={'sideBarUser'}>
                <Avatar style={{width: 40, height: 40}}
                        src={photo}/>
                <div className={'sideBarUserInfo'}>
                    <Link to={'/home/currentUser'}>{nickName}</Link>
                    <span>Новий користувач Instagram</span>
                </div>
            </div>
            <div className={'sideBarLink'}>
                <Link to={'/home/currentUser'}>Стежити</Link>
            </div>
        </li>
    )
}