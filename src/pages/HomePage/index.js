import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentUser} from "../../redux/ducks/currentUser/actionCreator";
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
import {toggleAddPostModal} from "../../redux/ducks/addPost/actionCreators";
import {getPosts} from "../../redux/ducks/postList/actionCreators";


export const HomePage = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.reUser);
    const {isOpenAddPostModal} = useSelector(state => state.reAddPost)

    const toggleAddModalStatus = value => {
        dispatch(toggleAddPostModal(value))
    };


    React.useEffect(() => {
        dispatch(fetchCurrentUser());
        dispatch(getPosts())
    }, [dispatch]);

    return (
        <div className={'homePage'}>
            <Header user={currentUser}/>
            <Route exact path={'/home'}>
                <div className="homePageContainer">
                    <div className={'homePageContentWrapper'}>
                        <SideBar currentUser={currentUser}/>

                        <UserHistoryList/>

                        <div className="homePageAddPostButtonContainer">
                            <button onClick={() => toggleAddModalStatus(true)}>Добавить пост</button>
                        </div>
                        <PostList/>
                    </div>
                    <Footer/>
                    <AddPostModal open={isOpenAddPostModal} handleClose={() => toggleAddModalStatus(false)}/>
                </div>
            </Route>
            <Route path={'/home/currentUser/:id'} component={UserPage}/>
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