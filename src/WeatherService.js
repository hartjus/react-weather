import axios from 'axios';

export default class WeatherService {

    async getForecast(zipCode) {
        const url = `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&APPID=1b8dbfc46dac2cee980b295dc56c1534`;

        // returns a promise
        const result = await axios.get(url);
        
        return result.data;
    }
}
