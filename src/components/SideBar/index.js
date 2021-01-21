import React from 'react'

import Avatar from "@material-ui/core/Avatar";

import {Link} from "react-router-dom";

import './style.css'


export const SideBar = ({currentUser}) => {
    return(
        <div className={'sideBarHomePage'}>
            <div className={'sideBarContainer'}>
                <div className={"sideBarHeader"}>
                    <div className={'sideBarUser'}>
                        <Avatar style={{width: 60, height: 60}} src={currentUser && currentUser.photoURL}/>
                        <div className={'sideBarUserInfo'}>
                            <Link to={'/home/user'}>krav_yura</Link>
                            <span>Епіфан</span>
                        </div>
                    </div>
                    <div className={'sideBarLink'}>
                        <Link to={'/home/user'}>Перейти</Link>
                    </div>
                </div>
                <div className={'sideBarRecommendationBlock'}>
                    <div className="recommendationTitle">
                        <span>Рекомендації для вас</span>
                        <a href="#">Переглянути всіх</a>
                    </div>
                    <ul className="recommendationList">
                        <li className={'recommendationListItem'}>
                            <div className={'sideBarUser'}>
                                <Avatar style={{width: 40, height: 40}}
                                        src={'https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/134767429_2719338264985751_8611336557215063430_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_ohc=VJDWVaJhMAwAX9J8XFE&tp=1&oh=cbde865ca6273cda189f12799d644c33&oe=602F9E79'}/>
                                <div className={'sideBarUserInfo'}>
                                    <Link to={'/home/user'}>k.a.andreevna__</Link>
                                    <span>Новий користувач Instagram</span>
                                </div>
                            </div>
                            <div className={'sideBarLink'}>
                                <Link to={'/home/user'}>Стежити</Link>
                            </div>
                        </li>
                        <li className={'recommendationListItem'}>
                            <div className={'sideBarUser'}>
                                <Avatar style={{width: 40, height: 40}}
                                        src={'https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/138925032_234263151697572_359374482020071557_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_ohc=fQfHuzrdgGIAX-TlpaD&tp=1&oh=e002b9c41f32057398c9ac3ea67b5f0e&oe=602EB114'}/>
                                <div className={'sideBarUserInfo'}>
                                    <Link to={'/home/user'}>sentiago_prvt</Link>
                                    <span>Новий користувач Instagram</span>
                                </div>
                            </div>
                            <div className={'sideBarLink'}>
                                <Link to={'/home/user'}>Стежити</Link>
                            </div>
                        </li>
                        <li className={'recommendationListItem'}>
                            <div className={'sideBarUser'}>
                                <Avatar style={{width: 40, height: 40}}
                                        src={'https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/137364262_851756678933596_5602504019088851640_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_ohc=5FZYah08VzEAX9K7Gzm&tp=1&oh=08ce05c3ef54b8de3f8b503bb491d147&oe=602F6711'}/>
                                <div className={'sideBarUserInfo'}>
                                    <Link to={'/home/user'}>khristenko.vlad</Link>
                                    <span>Новий користувач Instagram</span>
                                </div>
                            </div>
                            <div className={'sideBarLink'}>
                                <Link to={'/home/user'}>Стежити</Link>
                            </div>
                        </li>
                        <li className={'recommendationListItem'}>
                            <div className={'sideBarUser'}>
                                <Avatar style={{width: 40, height: 40}}
                                        src={'https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/109835044_836094506926711_6715215772417580529_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_ohc=hoTRlL0qdoMAX_hnVHm&tp=1&oh=f009c55cf263e3b31d19a05442f28d92&oe=602ED18D'}/>
                                <div className={'sideBarUserInfo'}>
                                    <Link to={'/home/user'}>strohaa</Link>
                                    <span>Новий користувач Instagram</span>
                                </div>
                            </div>
                            <div className={'sideBarLink'}>
                                <Link to={'/home/user'}>Стежити</Link>
                            </div>
                        </li>
                        <li className={'recommendationListItem'}>
                            <div className={'sideBarUser'}>
                                <Avatar style={{width: 40, height: 40}}
                                        src={'https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120192960_787763818731303_8751471371622565774_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_ohc=_Wy__dVi0YMAX8j2V4L&tp=1&oh=6719ee439a5d566abe34b168a3047b73&oe=602F1450'}/>
                                <div className={'sideBarUserInfo'}>
                                    <Link to={'/home/user'}>omar__alekberov</Link>
                                    <span>Новий користувач Instagram</span>
                                </div>
                            </div>
                            <div className={'sideBarLink'}>
                                <Link to={'/home/user'}>Стежити</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}