import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { middleware as thunkMiddleware } from 'redux-saga-thunk';
import thunk from 'redux-thunk';
import saga from './saga';
import { combineReducers } from 'redux';

import auth from './auth/reducer';


const rootReducer = combineReducers({
    auth
});

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(thunk, thunkMiddleware, sagaMiddleware, loggerMiddleware));

sagaMiddleware.run(saga);

export default store;
