import React from "react";
import './style.css'
import {SearchForm} from "../forms/SearchForm";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from "@material-ui/core/Avatar";
import {Link, NavLink, Switch} from "react-router-dom";
import {HeaderNavigationListItem} from "./HeaderNavigationListItem";
import IconButton from "@material-ui/core/IconButton";
import {logout} from "../../redux/ducks/auth/actionCreator";
import {useDispatch} from "react-redux";


export const Header = ({user}) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <div className={'header'}>
            <div className="headerContainer">
                <Link to={"/home"}>
                    <div className={'headerLogo'}>
                        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                             alt="logo"/>
                    </div>
                </Link>
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
                            <HeaderNavigationListItem>
                                <IconButton style={{padding: 0}} onClick={handleLogout}>
                                    <ExitToAppIcon style={{fontSize: 28, color: 'rgb(69,68,68)'}}/>
                                </IconButton>
                            </HeaderNavigationListItem>
                            <NavLink to={user ? `/home/currentUser/${user.uid}` : '/home/currentUser'}
                                     activeClassName="activeHeaderTab" exact>
                                <HeaderNavigationListItem>
                                    <Avatar style={{width: 27, height: 27,}} alt="userLogo" src={user&& user.photoURL}/>
                                </HeaderNavigationListItem>
                            </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}