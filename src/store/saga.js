import axios from 'axios';
import { createRequestInstance, watchRequests } from 'redux-saga-requests';
import {createDriver} from 'redux-saga-requests-axios';
import Alert from 'react-s-alert';

axios.interceptors.request.use(function (config) {
    //config.headers['Authorization'] = `Bearer ${localStorage.getItem('authToken')}`;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(
    response => response,
    (error) => {
        if (error.response.status === 500) {
            Alert.error(error.response.data.message);
        }
        return Promise.reject(error);
    });

export default function* rootSaga() {
    yield createRequestInstance({ driver: createDriver(axios) });
    yield watchRequests();
}