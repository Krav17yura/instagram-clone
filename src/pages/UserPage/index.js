import React from 'react'

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";


import  {Link, Route, useParams} from "react-router-dom";

import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';

import {useDispatch, useSelector} from "react-redux";

import {Footer} from "../../components/Footer";
import {ProfileStatList} from "../../components/ProfileStatList";
import {UserPagePostList} from "../../components/UserPagePostList";

import './style.css'
import AppError from "../../components/AppError";



export const UserPage = () => {
    const params = useParams();

    const {id} = params
    const {currentUser} = useSelector(state => state.reUser);
    const [value, setValue] = React.useState('home');
    console.log(id)


    return (
        <div className="userPageContainer">
            <div className="userPageHeader">
                <div className="userPageHeaderAvatar">
                    <Avatar
                        style={{margin: "0 auto"}}
                        src={currentUser && currentUser.photoURL}/>
                </div>
                <div className="userPageHeaderInformation">
                    <div className="userPageHeaderInformationSettingBlock userPageHeaderButton">
                        <h2>{currentUser && currentUser.nickName}</h2>
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
                        <BottomNavigationAction value="home" style={{minWidth: '30px'}} icon={<GridOnOutlinedIcon/>} component={Link} to={`/home/currentUser/${id}/addPost`}/>
                        <BottomNavigationAction value="favorites" style={{minWidth: '30px'}} icon={<LiveTvOutlinedIcon/>} component={Link} to={`/home/currentUser/${id}/video`}/>
                        <BottomNavigationAction value="nearby" style={{minWidth: '30px'}} icon={<BookmarkBorderOutlinedIcon/>} component={Link} to={`/home/currentUser/${id}/saved`}/>
                        <BottomNavigationAction value="folder" style={{minWidth: '30px'}} icon={<PermContactCalendarOutlinedIcon/>} component={Link} to={`/home/currentUser/${id}/marked`}/>
                    </BottomNavigation>
                </div>
                <Route exact path={[`/home/currentUser/${id}/addPost`, `/home/currentUser/${id}`] }>
                    <UserPagePostList/>
                </Route>
                <Route exact path={[`/home/currentUser/${id}/video`, `/home/currentUser/${id}/saved`, `/home/currentUser/${id}/marked`]} >
                     <div className="userPageUnderDevelopmentRoute">
                         <div>
                             <AppError/>
                         </div>
                         <h3>Ця сторінка наразі знаходиться в розробці</h3>
                     </div>
                </Route>

            </div>
            <Footer/>

        </div>
    )
}