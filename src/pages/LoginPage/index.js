import React, {useState, useEffect} from 'react'
import './style.css'
import {LoginForm} from "../../components/forms/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/ducks/auth/actionCreator";
import {Link} from "react-router-dom";

const photoArr = [
    'https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg',
    'https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg',
    'https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg',
    'https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg',
    'https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg'
]

export const LoginPage = (props) => {
    const dispatch = useDispatch();
    const [index, setIndex] = useState(0);
    const {loginInProgress, loginError} = useSelector(state => state.reAuth);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === photoArr.length - 1 ? 0 : prevIndex + 1
                ),
            4000
        );
        return () => {
            resetTimeout();
        };
    }, [index]);

    const handleSubmit = values => {
        const {history} = props;
        const {email, password} = values
        dispatch(login({email, password, history}))
    }


    return (
        <div className='loginPage-container'>
            <div className='loginPage-photo__content'>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/instagram-clone-4ffec.appspot.com/o/38825c9d5aa2.png?alt=media&token=ab351b3c-a4d4-4655-8cf3-fe7567020804"
                    alt="img"/>
                <span className={'loginPage-photo__secondary'}>
                      <img src={photoArr[index]}
                           alt="ss"/>
                </span>
            </div>
            <div>
                <div className={'loginForm-container'}>
                    <img src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png" alt=""/>
                    <LoginForm
                        onSubmit={handleSubmit}
                        inProgress={loginInProgress}
                        onError={loginError}
                    />
                </div>

                <div className='redirectBlock'>
                    Не маєте облікового запису? <Link to={'/signup'}>Зареєструйтеся</Link>
                </div>
            </div>

        </div>
    )
}