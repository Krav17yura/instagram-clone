import React from "react";

import './style.css'

export const ProfileStatList = ({postCount, readersCount, followCount }) => {
    return(
        <ul className="userPageHeaderInformationProfileStatList">
            <li><b>{postCount}</b> дописів</li>
            <li><b>{readersCount}</b> читачів</li>
            <li>Стежить: <b>{followCount}</b> </li>
        </ul>
    )
}