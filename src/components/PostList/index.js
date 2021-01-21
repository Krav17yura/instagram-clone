import React from 'react'

import {homePagePostList} from "../../constants";

import './style.css'
import {PostListItem} from "./PostListItem";


export const PostList = () => {
    return(
        <div className="postContainer">
            <ul className="postList">
                {homePagePostList && homePagePostList.map((item) => (
                    <PostListItem
                    key={item.id}
                    {...item}
                    />
                ))}
            </ul>
        </div>
    )
}