import React from "react";
import './style.css'
import {SearchForm} from "../forms/SearchForm";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Avatar from "@material-ui/core/Avatar";
import {NavLink} from "react-router-dom";
import {HeaderNavigationListItem} from "./HeaderNavigationListItem";


export const Header = ({user}) => {
    return (
        <div className={'header'}>
            <div className="headerContainer">
                <div className={'headerLogo'}>
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo"/>
                </div>
                <div className="searchBlock">
                    <SearchForm/>
                </div>
                <div className={'headerNavigationBlock'}>
                    <ul className={'headerNavigationList'}>
                        <NavLink to={'/home'} activeClassName="activeHeaderTab" exact>
                            <HeaderNavigationListItem>
                                <HomeOutlinedIcon style={{fontSize: 28, color: 'rgb(69,68,68)'}}/>
                            </HeaderNavigationListItem>
                        </NavLink>
                        <NavLink to={'/home/message'} activeClassName="activeHeaderTab" exact>
                            <HeaderNavigationListItem>
                                <SendOutlinedIcon style={{fontSize: 28, color: 'rgb(69,68,68)'}}/>
                            </HeaderNavigationListItem>
                        </NavLink>
                        <NavLink to={'/home/recommendation'} activeClassName="activeHeaderTab" exact>
                            <HeaderNavigationListItem>
                                <ExploreOutlinedIcon style={{fontSize: 28, color: 'rgb(69,68,68)'}}/>
                            </HeaderNavigationListItem>
                        </NavLink>
                        <NavLink to={'/home/favorite'} activeClassName="activeHeaderTab" exact>
                            <HeaderNavigationListItem>
                                <FavoriteBorderOutlinedIcon style={{fontSize: 28, color: 'rgb(69,68,68)'}}/>
                            </HeaderNavigationListItem>
                        </NavLink>
                        <NavLink to={'/home/user'} activeClassName="activeHeaderTab" exact>
                            <HeaderNavigationListItem>
                                <Avatar style={{width: 27, height: 27}} alt="userLogo" src={user && user.photoURL}/>
                            </HeaderNavigationListItem>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}