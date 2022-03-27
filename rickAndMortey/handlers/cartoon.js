const cartoon = require('../pkg/RaM');


const getCharacter = async (req, res) => {
    try {
        let character = await cartoon.getCartoonCharacters(req.params.character);
        return res.status(200).send(character);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("Internal server error!");
    }
};


const getLocation = async (req, res) => {
    try {
        let location = await cartoon.getCartoonLocations(req.params.location);
        return res.status(200).send(location);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("Internal server error!");
    }
};

const getEpisode = async (req, res) => {
    try {
        let episode = await cartoon.getCartoonEpisodes(req.params.episode);
        return res.status(200).send(episode);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error!');
    }
};

module.exports = {
    getCharacter,
    getLocation,
    getEpisode, 
};