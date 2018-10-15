import {success, error} from 'redux-saga-requests';
import * as types from './action-types';
import { STATE_STATUSES } from '../../common/constants/statuses';
import { tokenStore, setAuthHeader } from '../../common/helpers/storage';

const user = {
    id: null,
    first_name: '',
    last_name: '',
    email: '',
    avatar_url:''
};

const initialState = {
    user: user,
    isAuthenticated: null,
    status: STATE_STATUSES.READY,
    exception: {
        message: null,
        errors: {}
    }
};

export default (state = initialState, action) => {
    switch (action.type) {


    case types.AUTH_LOGIN: {
        return processReducer(state);
    }
    case success(types.AUTH_LOGIN) : {
        const { token } = action.payload.data.data;
        tokenStore(token);
        setAuthHeader(token);
        return { ...state, status: STATE_STATUSES.READY, isAuthenticated: true };
    }
    case error(types.AUTH_LOGIN) : {
        return errorReducer(action.payload.response.data);
    }

    default:
        return state;
    }
};

const errorReducer = (exception, state = initialState) => ({
    ...state,
    isAuthenticated: !! state.user.id,
    status: STATE_STATUSES.ERROR,
    exception: {
        errors: {...exception.errors},
        message: exception.message,
    }
});

const processReducer = (state = initialState) => ({
    ...state,
    status: STATE_STATUSES.PENDING,
    exception: { ...initialState.exception }
});
