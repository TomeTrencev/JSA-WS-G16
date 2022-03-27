const config = require('./pkg/config');
const express = require('express');
const cartoon = require('./handlers/cartoon');

const api = express();

api.use(express.json());

api.get('/api/v1/character/:character', cartoon.getCharacter);
api.get('/api/v1/location/:location', cartoon.getLocation);
api.get('api/v1/episode/:episode', cartoon.getEpisode);


api.listen(config.get('service').port, err => {
    if (err) return console.log(err);
    console.log(`Server is running on port ${config.get('service').port}`);
});
