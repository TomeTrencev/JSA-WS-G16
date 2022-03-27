const fetch = require('node-fetch');
const config = require('../config');

const API_URL = 'https://pro.openweathermap.org/data/2.5/';

const CACHE = {};

const getCityForecast = async (city) => {
    let now = new Date().getTime() / 1000;

    if (CACHE[city] && now < CACHE[city].timestamp + config.get('weather').cache_expiery) {
        return CACHE[city];
    }

    let URL = `${API_URL}/forecast/hourly?q=${city}&appid=${config.get('forecast').api_key}`;
    try {
        let res = await fetch(URL);
        let data = await res.json();

        CACHE[city] = {
            timestamp: new Date().getTime() / 1000,
            data
        };

        return data;
    } catch (err) {
        throw err;
        
    }
};

module.exports = {
    getCityForecast
}

