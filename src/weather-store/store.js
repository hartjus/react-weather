import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducer from './reducer';

import createSagaMiddleware from 'redux-saga';
import weatherSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        weather: reducer
    }),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(weatherSaga);

export default store;
