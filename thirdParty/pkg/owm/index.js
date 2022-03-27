const fetch = require ('node-fetch');

const config = require ('../config');

const API_URL = 'https://api.openweathermap.org/data/2.5';

const CACHE = {};

const getCityWeather = async (city) => {
    let now = new Date().getTime() /1000;

    if(CACHE[city] && now <CACHE[city].timestamp + config.get('weather').cashe_expiery) {
        return CACHE[city];
    }
    let URL = `${API_URL}/weather?q=${city}&units=metric&appid=${config.get('weather').api_key}`;
    try {
       let res = await fetch(URL);
       let data = await res.json();
       
       CACHE[city] = {
           timestamp: new Date().getTime() /1000,
           data
       };
       return data;
    } catch (err) {
        throw err
    }
};

module.exports = {
    getCityWeather
}