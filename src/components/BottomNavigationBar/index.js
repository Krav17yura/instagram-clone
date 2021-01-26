import React from "react";

import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BottomNavigation from "@material-ui/core/BottomNavigation";

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import {Link} from "react-router-dom";

import './style.css'
import {Avatar} from "@material-ui/core";


export const BottomNavigationBar = ({user}) => {
    const [value, setValue] = React.useState('home');

    return (
        <div className={'bottomNavigationBarContainer'}>
            <BottomNavigation value={value} onChange={(event, newValue) => setValue(newValue)} className={"bottomNavigationBar"}>
                <BottomNavigationAction value="home" style={{minWidth: '30px'}} icon={<HomeOutlinedIcon/>} component={Link} to={'/home'}/>
                <BottomNavigationAction value="favorites" style={{minWidth: '30px'}} icon={<SendOutlinedIcon/>} component={Link} to={'/home/message'}/>
                <BottomNavigationAction value="nearby" style={{minWidth: '30px'}} icon={<ExploreOutlinedIcon/>} component={Link} to={'/home/recommendation'}/>
                <BottomNavigationAction value="folder" style={{minWidth: '30px'}} icon={<FavoriteBorderOutlinedIcon/>} component={Link} to={'/home/favorite'}/>
                <BottomNavigationAction value="user" style={{minWidth: '30px'}} icon={<Avatar src={user && user.photoURL} style={{width: 27, height: 27}}/>}  component={Link} to={user ? `/home/currentUser/${user.uid}` : '/home/currentUser'}/>
            </BottomNavigation>
        </div>
    );
}