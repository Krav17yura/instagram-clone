import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentUser} from "../../redux/ducks/user/actionCreator";
import {logout} from "../../redux/ducks/auth/actionCreator";
import {Route} from "react-router-dom";


import './style.css'

import {UserPage} from "../UserPage";
import {Header} from "../../components/Header";
import {BottomNavigationBar} from "../../components/BottomNavigationBar";
import {PostList} from "../../components/PostList";
import {SideBar} from "../../components/SideBar";
import {UserHistoryList} from "../../components/UserHistoryList";
import {Footer} from "../../components/Footer";


export const HomePage = (props) => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.reUser);

    const handleLogout = () => {
        const {history} = props;
        dispatch(logout())
            .then(() => history.push('/login'))
            .catch(() => {
            });
    }

    React.useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]);

    return (
        <div className={'homePage'}>
            <Header user={currentUser}/>
            <Route exact path={'/home'}>
                <div className="homePageContainer">
                    <div className={'homePageContent'}>
                        <UserHistoryList/>
                        <SideBar currentUser={currentUser}/>
                    </div>
                    <PostList/>
                    <Footer/>
                </div>
            </Route>
            <Route exact path={'/home/user'} component={UserPage}/>
            <BottomNavigationBar user={currentUser}/>
            <button onClick={handleLogout}>LogOut</button>
        </div>
    )
}