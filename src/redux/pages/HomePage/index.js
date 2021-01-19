import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentUser} from "../../ducks/user/actionCreator";
import {logout} from "../../ducks/auth/actionCreator";
import {Route, Link} from "react-router-dom";
import {Header} from "../../../components/Header";
import {UserInformationPage} from "../UserInforamtionPage";
import './style.css'
import {BottomNavigationBar} from "../../../components/BottomNavigationBar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";


import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

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
            <div className="homePageContainer">
                <div className={'homePageContent'}>
                    <div className={'mainSideHomePage'}>
                        <div className="userHistoryBlock">
                            <ul className="userHistoryList">
                                <li className={'userHistoryListItem'}>
                                    <Avatar style={{width: 55, height: 55}} src={'https://avatars0.githubusercontent.com/u/36710059?s=460&u=2032a7eff0aabfcb796a018cf23c4b85a1131dd0&v=4'}/>
                                    <span>krav_yura</span>
                                </li>
                                <li className={'userHistoryListItem'}>
                                    <Avatar style={{width: 55, height: 55}} src={'https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/137364262_851756678933596_5602504019088851640_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_ohc=5FZYah08VzEAX9K7Gzm&tp=1&oh=08ce05c3ef54b8de3f8b503bb491d147&oe=602F6711'}/>
                                    <span>mike_branks</span>
                                </li>
                                <li className={'userHistoryListItem'}>
                                    <Avatar style={{width: 55, height: 55}} src={'https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/134767429_2719338264985751_8611336557215063430_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_ohc=VJDWVaJhMAwAX9J8XFE&tp=1&oh=cbde865ca6273cda189f12799d644c33&oe=602F9E79'}/>
                                    <span>khristenko.vlad</span>
                                </li>
                                <li className={'userHistoryListItem'}>
                                    <Avatar style={{width: 55, height: 55}} src={'https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/109835044_836094506926711_6715215772417580529_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_ohc=hoTRlL0qdoMAX_hnVHm&tp=1&oh=f009c55cf263e3b31d19a05442f28d92&oe=602ED18D'}/>
                                    <span>strohaa</span>
                                </li>
                                <li className={'userHistoryListItem'}>
                                    <Avatar style={{width: 55, height: 55}} src={'https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120192960_787763818731303_8751471371622565774_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_ohc=_Wy__dVi0YMAX8j2V4L&tp=1&oh=6719ee439a5d566abe34b168a3047b73&oe=602F1450'}/>
                                    <span>omar__alekberov</span>
                                </li>
                                <li className={'userHistoryListItem'}>
                                    <Avatar style={{width: 55, height: 55}}/>
                                    <span>dank__holm</span>
                                </li>
                                <li className={'userHistoryListItem'}>
                                    <Avatar style={{width: 55, height: 55}}/>
                                    <span>mark_druk</span>
                                </li>
                                <li className={'userHistoryListItem'}>
                                    <Avatar style={{width: 55, height: 55}}/>
                                    <span>mark_druk</span>
                                </li>
                                <li className={'userHistoryListItem'}>
                                    <Avatar style={{width: 55, height: 55}}/>
                                    <span>mark_druk</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className={'sideBarHomePage'}>
                        <div className={'test'}>
                            <div className={"sideBarHeader"}>
                                <div className={'sideBarUser'}>
                                    <Avatar style={{width: 60, height: 60}} src={currentUser && currentUser.photoURL}/>
                                    <div className={'sideBarUserInfo'}>
                                        <Link to={'/home/user'}>krav_yura</Link>
                                        <span>Епіфан</span>
                                    </div>
                                </div>
                                <div className={'sideBarLink'}>
                                    <Link to={'/home/user'}>Перейти</Link>
                                </div>
                            </div>
                            <div className={'sideBarRecommendationBlock'}>
                                <div className="recommendationTitle">
                                    <span>Рекомендації для вас</span>
                                    <a href="#">Переглянути всіх</a>
                                </div>
                                <ul className="recommendationList">
                                    <li className={'recommendationListItem'}>
                                        <div className={'sideBarUser'}>
                                            <Avatar style={{width: 40, height: 40}}
                                                    src={'https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/134767429_2719338264985751_8611336557215063430_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_ohc=VJDWVaJhMAwAX9J8XFE&tp=1&oh=cbde865ca6273cda189f12799d644c33&oe=602F9E79'}/>
                                            <div className={'sideBarUserInfo'}>
                                                <Link to={'/home/user'}>k.a.andreevna__</Link>
                                                <span>Новий користувач Instagram</span>
                                            </div>
                                        </div>
                                        <div className={'sideBarLink'}>
                                            <Link to={'/home/user'}>Стежити</Link>
                                        </div>
                                    </li>
                                    <li className={'recommendationListItem'}>
                                        <div className={'sideBarUser'}>
                                            <Avatar style={{width: 40, height: 40}}
                                                    src={'https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/138925032_234263151697572_359374482020071557_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_ohc=fQfHuzrdgGIAX-TlpaD&tp=1&oh=e002b9c41f32057398c9ac3ea67b5f0e&oe=602EB114'}/>
                                            <div className={'sideBarUserInfo'}>
                                                <Link to={'/home/user'}>sentiago_prvt</Link>
                                                <span>Новий користувач Instagram</span>
                                            </div>
                                        </div>
                                        <div className={'sideBarLink'}>
                                            <Link to={'/home/user'}>Стежити</Link>
                                        </div>
                                    </li>
                                    <li className={'recommendationListItem'}>
                                        <div className={'sideBarUser'}>
                                            <Avatar style={{width: 40, height: 40}}
                                                    src={'https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/137364262_851756678933596_5602504019088851640_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_ohc=5FZYah08VzEAX9K7Gzm&tp=1&oh=08ce05c3ef54b8de3f8b503bb491d147&oe=602F6711'}/>
                                            <div className={'sideBarUserInfo'}>
                                                <Link to={'/home/user'}>khristenko.vlad</Link>
                                                <span>Новий користувач Instagram</span>
                                            </div>
                                        </div>
                                        <div className={'sideBarLink'}>
                                            <Link to={'/home/user'}>Стежити</Link>
                                        </div>
                                    </li>
                                    <li className={'recommendationListItem'}>
                                        <div className={'sideBarUser'}>
                                            <Avatar style={{width: 40, height: 40}}
                                                    src={'https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/109835044_836094506926711_6715215772417580529_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_ohc=hoTRlL0qdoMAX_hnVHm&tp=1&oh=f009c55cf263e3b31d19a05442f28d92&oe=602ED18D'}/>
                                            <div className={'sideBarUserInfo'}>
                                                <Link to={'/home/user'}>strohaa</Link>
                                                <span>Новий користувач Instagram</span>
                                            </div>
                                        </div>
                                        <div className={'sideBarLink'}>
                                            <Link to={'/home/user'}>Стежити</Link>
                                        </div>
                                    </li>
                                    <li className={'recommendationListItem'}>
                                        <div className={'sideBarUser'}>
                                            <Avatar style={{width: 40, height: 40}}
                                                    src={'https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120192960_787763818731303_8751471371622565774_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_ohc=_Wy__dVi0YMAX8j2V4L&tp=1&oh=6719ee439a5d566abe34b168a3047b73&oe=602F1450'}/>
                                            <div className={'sideBarUserInfo'}>
                                                <Link to={'/home/user'}>omar__alekberov</Link>
                                                <span>Новий користувач Instagram</span>
                                            </div>
                                        </div>
                                        <div className={'sideBarLink'}>
                                            <Link to={'/home/user'}>Стежити</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="postContainer">
                    <ul className="postList">
                        <li className="postListItem">
                            <div className="post">
                                <div className="postHeader">
                                    <div className='postHeaderUserInfo'>
                                        <Avatar
                                            src={'https://avatars0.githubusercontent.com/u/36710059?s=460&u=2032a7eff0aabfcb796a018cf23c4b85a1131dd0&v=4'}
                                        />
                                        <a href={'#'}>krav_yura</a>
                                    </div>
                                    <div className="postHeaderButton">
                                        <IconButton size={"small"}>
                                            <MoreHorizIcon fontSize="inherit"/>
                                        </IconButton>
                                    </div>
                                </div>
                                <div className="postMedia">
                                    <img
                                        src="https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-15/e35/65300425_348388746058832_3269859927196162621_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=yrFgnuz1zTEAX-z5Pr-&tp=1&oh=d45fa61020406b6f838448dae6c26898&oe=602DDDD3"
                                        alt="image"
                                    />
                                </div>
                                <div className="postFooter">
                                    <div className="postFooterButtons">
                                        <div className="postFooterMainButtons">
                                            <ul className="postFooterButtonList">
                                                <li className="postFooterButtonListItem">
                                                    <IconButton>
                                                        <FavoriteBorderIcon/>
                                                    </IconButton>
                                                    <IconButton>
                                                        <ModeCommentOutlinedIcon/>
                                                    </IconButton>
                                                    <IconButton>
                                                        <SendOutlinedIcon/>
                                                    </IconButton>
                                                </li>
                                            </ul>
                                        </div>
                                        <IconButton>
                                            <BookmarkBorderOutlinedIcon/>
                                        </IconButton>
                                    </div>
                                    <div className="postCountView">
                                        19 вподобань
                                    </div>
                                    <div className="postDescription">
                                        <a href={'#'}>krav_yura </a>
                                         Суд Київщини взяв під варту зловмисника, причетного до умисного вбивства киянина
                                    </div>
                                    <div className="postCommentBlock">
                                        <form>
                                            <input type="text" placeholder={'Додайте коментар...'}/>
                                            <button disabled>Опублікувати</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="postListItem">
                            <div className="post">
                                <div className="postHeader">
                                    <div className='postHeaderUserInfo'>
                                        <Avatar
                                            src={'https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/134767429_2719338264985751_8611336557215063430_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_ohc=VJDWVaJhMAwAX9J8XFE&tp=1&oh=cbde865ca6273cda189f12799d644c33&oe=602F9E79'}
                                        />
                                        <a href={'#'}>k.a.andreevna__</a>
                                    </div>
                                    <div className="postHeaderButton">
                                        <IconButton size={"small"}>
                                            <MoreHorizIcon fontSize="inherit"/>
                                        </IconButton>
                                    </div>
                                </div>
                                <div className="postMedia">
                                    <img
                                        src="https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/23824716_1504775229559551_3539924178645811200_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=yjaCPjTCAXUAX_w6cnY&tp=1&oh=888f18d02b7eb075d5736c8886fc5421&oe=6031314B"
                                        alt="image"
                                    />
                                </div>
                                <div className="postFooter">
                                    <div className="postFooterButtons">
                                        <div className="postFooterMainButtons">
                                            <ul className="postFooterButtonList">
                                                <li className="postFooterButtonListItem">
                                                    <IconButton>
                                                        <FavoriteBorderIcon/>
                                                    </IconButton>
                                                    <IconButton>
                                                        <ModeCommentOutlinedIcon/>
                                                    </IconButton>
                                                    <IconButton>
                                                        <SendOutlinedIcon/>
                                                    </IconButton>
                                                </li>
                                            </ul>
                                        </div>
                                        <IconButton>
                                            <BookmarkBorderOutlinedIcon/>
                                        </IconButton>
                                    </div>
                                    <div className="postCountView">
                                        19 вподобань
                                    </div>
                                    <div className="postDescription">
                                        <a href={'#'}>k.a.andreevna__ </a>
                                        Суд Київщини взяв під варту зловмисника, причетного до умисного вбивства киянина
                                    </div>
                                    <div className="postCommentBlock">
                                        <form>
                                            <input type="text" placeholder={'Додайте коментар...'}/>
                                            <button disabled>Опублікувати</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <Route exact path={'/home/user'} component={UserInformationPage}/>
                <button onClick={handleLogout}>LogOut</button>
            </div>

            <BottomNavigationBar user={currentUser}/>
        </div>
    )
}