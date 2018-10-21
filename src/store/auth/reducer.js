import {success, error} from 'redux-saga-requests';
import * as types from './action-types';
import { STATE_STATUSES } from '../../common/constants/statuses';
import { tokenStore } from '../../common/helpers/storage';

const user = {
    id: null,
    first_name: '',
    last_name: '',
    email: '',
    avatar_url:''
};

const initialState = {
    user: user,
    isAuthenticated: false,
    status: STATE_STATUSES.PENDING,
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
        const { token, user } = action.payload.data.data;
        tokenStore(token);
        return { ...state, status: STATE_STATUSES.READY, user:user, isAuthenticated: true };
    }
    case error(types.AUTH_LOGIN) : {
        return errorReducer(action.payload.response.data);
    }


    case types.AUTH_REGISTER: {
        return processReducer(state);
    }
    case success(types.AUTH_REGISTER) : {
        const { token, user } = action.payload.data.data;
        tokenStore(token);
        return { ...state, status: STATE_STATUSES.READY, user:user, isAuthenticated: true };
    }
    case error(types.AUTH_REGISTER) : {
        return errorReducer(action.payload.response.data);
    }


    case types.AUTH_FETCH_USER: {
        return processReducer(state);
    }
    case success(types.AUTH_FETCH_USER) : {
        const { user } = action.payload.data.data;
        return { ...state, status: STATE_STATUSES.READY, user:user, isAuthenticated: true };
    }
    case error(types.AUTH_FETCH_USER) : {
        return errorReducer(action.payload.response.data);
    }

    case types.AUTH_LOGOUT: {
        return processReducer(state);
    }
    case success(types.AUTH_LOGOUT): {
        return {...initialState, status: STATE_STATUSES.READY, isAuthenticated: false };
    }
    case error(types.AUTH_LOGOUT): {
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
