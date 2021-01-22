import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import {firebase} from "../firebase-config";
import rootReducer from "./rootReducer";
import rootSaga from "./ducks/sagas";

const dev = !process.env.REACT_APP_ENV || process.env.REACT_APP_ENV === "development";

const composeEnhancers =
    dev && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk.withExtraArgument(firebase), sagaMiddleware)))

export default store;


sagaMiddleware.run(rootSaga)

