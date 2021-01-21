import React from "react";

import Avatar from "@material-ui/core/Avatar";
import {UserHistoryListItem} from "./UserHistoryListItem";

import './style.css'


export const UserHistoryList = ( ) => {
    return(
        <div className={'mainSideHomePage'}>
            <div className="userHistoryBlock">
                <ul className="userHistoryList">
                    <UserHistoryListItem nickName={'krav_yura'} photoURL={'https://avatars0.githubusercontent.com/u/36710059?s=460&u=2032a7eff0aabfcb796a018cf23c4b85a1131dd0&v=4'}/>
                    <UserHistoryListItem nickName={'mike_branks'} photoURL={'https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/137364262_851756678933596_5602504019088851640_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_ohc=5FZYah08VzEAX9K7Gzm&tp=1&oh=08ce05c3ef54b8de3f8b503bb491d147&oe=602F6711'}/>
                    <UserHistoryListItem nickName={'khristenko.vlad'} photoURL={'https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/134767429_2719338264985751_8611336557215063430_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_ohc=VJDWVaJhMAwAX9J8XFE&tp=1&oh=cbde865ca6273cda189f12799d644c33&oe=602F9E79'}/>
                    <UserHistoryListItem nickName={'strohaa'} photoURL={'https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/109835044_836094506926711_6715215772417580529_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_ohc=hoTRlL0qdoMAX_hnVHm&tp=1&oh=f009c55cf263e3b31d19a05442f28d92&oe=602ED18D'}/>
                    <UserHistoryListItem nickName={'omar__alekberov'} photoURL={'https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120192960_787763818731303_8751471371622565774_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_ohc=_Wy__dVi0YMAX8j2V4L&tp=1&oh=6719ee439a5d566abe34b168a3047b73&oe=602F1450'}/>

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