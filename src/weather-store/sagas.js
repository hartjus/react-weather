
import {call, put, takeEvery} from 'redux-saga/effects';
import WeatherService from '../WeatherService';

const weatherService = new WeatherService();

function* fetchForecast(action) {
    try {
        const forecast = yield call(weatherService.getForecast, action.payload);
        yield put({type: 'UPDATE_FORECAST', payload: forecast.list});
    } catch(e) {
        console.error('ERROR FETCHING FORECAST!!!');
        yield put({type: 'UPDATE_FORECAST', payload: [] });
    }
}

function* forecastSaga() {
    yield takeEvery('UPDATE_ZIP', fetchForecast);
}

export default forecastSaga;
