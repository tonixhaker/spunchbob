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