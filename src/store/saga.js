import axios from 'axios';

import { createRequestInstance, watchRequests } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
});

export default function* rootSaga() {
    yield createRequestInstance({ driver: createDriver(axiosInstance) });
    yield watchRequests();
}