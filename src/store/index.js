import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { requestsPromiseMiddleware } from 'redux-saga-requests';

import thunkMiddleware from 'redux-thunk';

import saga from './saga';

import auth from './auth/reducer';
import order from './order/reducer';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    auth,
    order
});

export function initializeStore(initialState = undefined) {
    const store = createStore(rootReducer, initialState,
        applyMiddleware(requestsPromiseMiddleware({auto: true}), thunkMiddleware, sagaMiddleware, loggerMiddleware));

    sagaMiddleware.run(saga);

    return store;
}
