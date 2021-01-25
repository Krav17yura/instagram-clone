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
import {AddPostModal} from "../../components/AddPostMoadal";
import AppError from "../../components/AppError";
import {toggleAddPostModal} from "../../redux/ducks/posts/actionCreators";


export const HomePage = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.reUser);
    const {isOpenAddPostModal} = useSelector(state => state.rePosts)

    const toggleAddModalStatus = value => {
        dispatch(toggleAddPostModal(value))
    };



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
                    <button onClick={() => toggleAddModalStatus(true)}>Добавить пост</button>
                    <PostList/>
                    <Footer/>
                    <AddPostModal open={isOpenAddPostModal} handleClose={() => toggleAddModalStatus(false)} />
                </div>
            </Route>
            <Route  path={'/home/user'} component={UserPage}/>
            <Route path={['/home/message', '/home/recommendation', '/home/favorite']}>

                <div className="HomePageUnderDevelopmentRoute">
                    <div>
                        <AppError/>
                    </div>
                    <h3>Ця сторінка наразі знаходиться в розробці</h3>
                </div>
            </Route>
            <BottomNavigationBar user={currentUser}/>
        </div>
    )
}