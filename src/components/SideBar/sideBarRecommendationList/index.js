import React from 'react'
import {useSelector} from "react-redux";
import {SideBarRecommendationListItem} from "./sideBarRecommendationListItem";
import AppError from "../../AppError";
import {AppLoading} from "../../AppLoading";


export const SideBarRecommendationList = () => {
    const {userList, getUserListInProgress, getUserListError} = useSelector(state => state.reUserList)
    return (
        <div className={'sideBarRecommendationBlock'}>
            {!getUserListError ? <>
                {getUserListInProgress ? <>
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
                </> : <AppLoading/>}
            </> : <AppError/>}
        </div>
    )
}
