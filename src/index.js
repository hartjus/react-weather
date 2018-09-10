import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import WeatherStore from './weather-store';

ReactDOM.render(
    <Provider store={WeatherStore.store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
