const fetch = require('node-fetch');

const config = require('../config');

const API_URL = 'https://api.openweathermap.org/data/2.5';

const CASHE = {};

const getCityWeather = async (city) => {
    let now = new Date().getTime() / 1000;
    if(CASHE[city] && now < CASHE[city].timestamp + 60) {
        return CASHE[city];
    }

    let URL = `${API_URL}/weather?q=${city}&units=metric&appid=${config.get('weather').api_key}`;
    try {
        let res = await fetch(URL);
        let data = await res.json();

        CASHE[city] = {
            timestamp:new Date().getTime() / 1000,
            data
        };

        return data;
    } catch (err) {
        throw err;
    }
};


module.exports = {
    getCityWeather
};