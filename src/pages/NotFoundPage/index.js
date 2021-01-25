import React from 'react'
import {Link} from "react-router-dom";
import './style.css'


export const NotFoundPage = () => {
    return (
        <div className="notFoundPageContainer">
            <h1>Page not found</h1>
            <Link to={'/home'}>Go home</Link>
        </div>
    )
}