import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { combineReducers } from 'redux';



const appReducers = combineReducers({});

const middlewares = [];
const loggerMiddleware = createLogger();
middlewares.push(loggerMiddleware);

const store = createStore(appReducers, applyMiddleware(...middlewares));


export default store;
