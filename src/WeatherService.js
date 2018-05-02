import axios from 'axios';

export default class WeatherService {

    getForecast(zipCode) {
        const url = `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&APPID={APP_KEY}`;

        // returns a promise
        return axios.get(url);
    }
}
