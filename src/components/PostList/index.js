import React from 'react'


import './style.css'
import {PostListItem} from "./PostListItem";
import {useSelector} from "react-redux";
import {AppLoading} from "../AppLoading";
import AppError from "../AppError";


export const PostList = () => {
    const {postsList, getPostsError, getPostsInProgress} = useSelector(state => state.rePostList)


    return (
        <div className="postContainer">
            <ul className="postList">
                {!getPostsError ? <>
                    {!getPostsInProgress ? <>
                        {postsList && postsList.map((item) => (
                            <PostListItem
                                key={item.urlPic}
                                {...item}
                            />
                        ))}
                    </> : <AppLoading/>}
                </> : <AppError/>}
            </ul>
        </div>
    )
}