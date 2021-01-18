import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentUser} from "../../ducks/user/actionCreator";
import {logout} from "../../ducks/auth/actionCreator";
import {Route, Link} from "react-router-dom";
import {Header} from "../../components/Header";
import {UserInformationPage} from "../UserInforamtionPage";
import './style.css'
import {BottomNavigationBar} from "../../components/BottomNavigationBar";

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
            <div className="homePageContainer">
                    <Header user={currentUser}/>
                <Link to={'/home/user'}>{currentUser && currentUser.displayName}</Link>
                <button onClick={handleLogout}>LogOut</button>
                    <Route exact path={'/home/user'} component={UserInformationPage}/>
                <BottomNavigationBar user={currentUser}/>
            </div>
        </div>
    )
}