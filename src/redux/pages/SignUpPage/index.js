import React from 'react'
import {SignUpForm} from "../../components/forms/SignUpForm";
import './style.css'
import {signup} from "../../ducks/auth/actionCreator";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const SignUpPage = (props) => {
    const dispatch = useDispatch();
    const {signupInProgress, signupError} = useSelector(state => state.reAuth);


    const handleSubmit = values => {
        const {history} = props;
        dispatch(signup(values))
            .then(() => history.push('/home'))
            .catch((e) => console.log(e))
    }


    return (
        <div className='signupPage-container'>
            <div className={'signupForm-container'}>
                <img src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png" alt=""/>
                <div className={'signupPage-headerTitle'}>
                    Зареєструйтеся, щоб переглядати світлини та відео від друзів.
                </div>
                <hr/>
                <SignUpForm
                    onSubmit={handleSubmit}
                    inProgress={signupInProgress}
                    onError={signupError}
                />
                <div className={'signupPage-footerText'}>
                    Реєструючись, ви приймаєте наші <a href="/#">Умови, Політику використання даних і Політику щодо
                    файлів cookie.</a>
                </div>
            </div>
            <div className='signupRedirectBlock'>
                У вас є обліковий запис? <Link to={'/login'}>Увійдіть</Link>
            </div>
        </div>
    )
}