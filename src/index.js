import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from "./redux/ducks/store";
import {projectAuth} from "./firebase-config";
import {authInfoSuccess} from "./redux/ducks/auth/actionCreator";

projectAuth.onAuthStateChanged(user => {
    store.dispatch(authInfoSuccess(user))
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
})

