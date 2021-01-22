import React from 'react'
import {useSelector} from "react-redux";
import {SideBarRecommendationListItem} from "./sideBarRecommendationListItem";


export const SideBarRecommendationList = () => {
    const userList = useSelector(state => state.reUserList.userList)
    return (
        <div className={'sideBarRecommendationBlock'}>
            <div className="recommendationTitle">
                <span>Рекомендації для вас</span>
                <a href="#">Переглянути всіх</a>
            </div>
            <ul className="recommendationList">
                {userList && userList.map((item) => (
                    <SideBarRecommendationListItem
                        key={item.id}
                        {...item}
                    />
                ))}

            </ul>
        </div>
    )
}
