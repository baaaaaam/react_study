import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function* (action) {
        yield put(startLoading(type)); // Indicate loading has started
        try {
            const response = yield call(request, action.payload); // Make API call
            yield put({
                type: SUCCESS,
                payload: response.data // Dispatch success action with response data
            });
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true // Indicate an error occurred
            });
        }
        yield put(finishLoading(type)); // Indicate loading has finished
    };
}