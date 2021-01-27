import React from 'react'
import {useSelector} from "react-redux";
import {SideBarRecommendationListItem} from "./sideBarRecommendationListItem";
import AppError from "../../AppError";
import {AppLoading} from "../../AppLoading";
import {Link} from "react-router-dom";


export const SideBarRecommendationList = () => {
    const {recommendationUserList, getUserListInProgress, getUserListError} = useSelector(state => state.reUserList)
    return (
        <div className={'sideBarRecommendationBlock'}>
            {!getUserListError ? <>
                {getUserListInProgress ? <>
                    <div className="recommendationTitle">
                        <span>Рекомендації для вас</span>

                        <Link to={'/home'}>Переглянути всіх</Link>
                    </div>
                    <ul className="recommendationList">
                        {recommendationUserList && recommendationUserList.map((item) => (
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
