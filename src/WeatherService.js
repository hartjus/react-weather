import axios from 'axios';

export default class WeatherService {

    async getForecast(zipCode) {
        const url = `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&APPID={APP_KEY}`;

        // returns a promise
        const result = await axios.get(url);

        return result.data;
    }
}
