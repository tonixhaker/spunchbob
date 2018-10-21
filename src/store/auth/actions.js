import * as types from './action-types';
const resourceBase = '/api';


export const login = (data) => ({
    type: types.AUTH_LOGIN,
    payload: {
        request: {
            method: 'post',
            url: `${resourceBase}/login`,
            data
        }
    },
    meta: {
        thunk: true
    }
});

export const register = (data) => ({
    type: types.AUTH_REGISTER,
    payload: {
        request: {
            method: 'post',
            url: `${resourceBase}/register`,
            data
        }
    },
    meta: {
        thunk: true
    }
});

export const fetchAuthUser = () => ({
    type: types.AUTH_FETCH_USER,
    payload: {
        request: {
            method: 'post',
            url: `${resourceBase}/get-auth-user`
        }
    },
    meta: {
        thunk: true
    }
});

export const logout = () => ({
    type: types.AUTH_LOGOUT,
    payload: {
        request: {
            method: 'post',
            url: `${resourceBase}/logout`
        }
    },
    meta: {
        thunk: true
    }
});