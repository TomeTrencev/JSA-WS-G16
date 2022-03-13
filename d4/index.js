
require('./pkg/db')
const express = require('express');
const movies = require('./handlers/movies');
const actors = require('./handlers/actors');

const api = express();

api.use(express.json());

api.get('/api/movies', movies.getAll);
api.get('/api/movies/:id', movies.getOne);
api.post('/api/movies', movies.create);
api.put('/api/movies/:id', movies.update);
api.patch('/api/movies/:id', movies.updatePartial);
api.delete('/api/movies/:id', movies.remove);

api.get('/api/actors', actors.getAll);
api.get('/api/actors/:id', actors.getOne);
api.post('/api/actors', actors.create);
api.put('/api/actors/:id', actors.update);
api.delete('/api/actors/:id', actors.remove);

api.listen(10000, err => {
    if (err) return console.log(err);
    return console.log('Server started on port 10000');
});