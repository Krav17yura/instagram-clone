import React from 'react'

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";


import {Link} from "react-router-dom";

import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';



import {Footer} from "../../components/Footer";
import {ProfileStatList} from "../../components/ProfileStatList";
import {UserPagePostList} from "../../components/UserPagePostList";

import './style.css'

export const UserPage = () => {
    const [value, setValue] = React.useState('home');


    return (
        <div className="userPageContainer">
            <div className="userPageHeader">
                <div className="userPageHeaderAvatar">
                    <Avatar
                        style={{margin: "0 auto"}}
                        src={'https://avatars0.githubusercontent.com/u/36710059?s=460&u=2032a7eff0aabfcb796a018cf23c4b85a1131dd0&v=4'}/>
                </div>
                <div className="userPageHeaderInformation">
                    <div className="userPageHeaderInformationSettingBlock userPageHeaderButton">
                        <h2>krav_yura</h2>
                        <button>Редагувати профіль</button>
                        <div>
                            <IconButton style={{padding: 5}}>
                                <SettingsOutlinedIcon fontSize="small" style={{fontSize: 30}}/>
                            </IconButton>
                        </div>
                    </div>
                    <div className="userPageHeaderInformationEditProfileButton userPageHeaderButton">
                        <button>
                            Редагувати профіль
                        </button>
                    </div>
                    <div className="profileStatListContainer">
                        <ProfileStatList postCount={9} readersCount={144} followCount={114}/>
                    </div>
                </div>
            </div>

            <div className="userPageContent">
                <div className="profileStatListContainerMobile">
                    <ProfileStatList postCount={9} readersCount={144} followCount={114}/>
                </div>
                <div className="userPageNavigationContainer">
                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => setValue(newValue)}
                        style={{backgroundColor: 'rgb(250,250,250)', borderTop: "1px solid rgb(219,219,219)"}}
                    >
                        <BottomNavigationAction value="home" style={{minWidth: '30px'}} icon={<GridOnOutlinedIcon/>} component={Link} to={'/home/user'}/>
                        <BottomNavigationAction value="favorites" style={{minWidth: '30px'}} icon={<LiveTvOutlinedIcon/>} component={Link} to={'/home/user'}/>
                        <BottomNavigationAction value="nearby" style={{minWidth: '30px'}} icon={<BookmarkBorderOutlinedIcon/>} component={Link} to={'/home/user'}/>
                        <BottomNavigationAction value="folder" style={{minWidth: '30px'}} icon={<PermContactCalendarOutlinedIcon/>} component={Link} to={'/home/user'}/>
                    </BottomNavigation>
                </div>
               <UserPagePostList/>
            </div>
            <Footer/>

        </div>
    )
}