const fetch = require("node-fetch");
const { config } = require("../config");

const API_URL = "https://rickandmortyapi.com/api";

const CACHE = {};

const getCartoonCharacters = async (character) => {
    let now = new Date().getTime() / 1000;

    if (CACHE[character] && now < CACHE[character].timestamp + 60) {
        return CACHE[character];
    }

    let URL = `${API_URL}/${character}`
    try {
        let res = await fetch(URL);
        let data = await res.json();

        CACHE[character] = {
            timestamp: new Date().getTime() / 1000,
            data
        };

        return data;
    }
    catch (err) {
        throw err;
    }
};


const getCartoonLocations = async (location) => {
    let now = new Date().getTime() / 1000;

    if (CACHE[location] && now < CACHE[location].timestamp + 60) {
        return CACHE[location];
    }

    let URL = `${API_URL}/${location}`
    try {
        let res = await fetch(URL);
        let data = await res.json();

        CACHE[location] = {
            timestamp: new Date().getTime() / 1000,
            data
        };

        return data;
    }
    catch (err) {
        throw err;
    }
};

const getCartoonEpisodes = async (episode) => {
    let now = new Date().getTime() / 1000;

    if (CACHE[episode] && now < CACHE[episode].timestamp + 60) {
        return CACHE[episode];
    }

    let URL = `${API_URL}/${episode}`
    try {
        let res = await fetch(URL);
        let data = await res.json();

        CACHE[episode] = {
            timestamp: new Date().getTime() / 1000,
            data
        };

        return data;
    }
    catch (err) {
        throw err;
    }
};


module.exports = {
    getCartoonCharacters,
    getCartoonLocations,
    getCartoonEpisodes

};