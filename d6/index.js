const config = require('./pkg/config');
const express = require('express');
const forecast = require('./handlers/forecast');

const api = express();

api.get('/api/v1/forecast/:city', forecast.getForCity);

api.listen(config.get('service').port, err => {
    if(err) return console.log(err);
    return console.log('Service started on port', config.get('service').port);
});