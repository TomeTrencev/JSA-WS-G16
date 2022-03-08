const express = require('express');
const footballers = require('./handlers/footballers');

const api = express();

api.use(express.json());

api.get('/api/footballers', footballers.getAll);
api.get('/api/footballers/:id', footballers.getOne);
api.post('/api/footballers', footballers.create);
api.put('/api/footballers/:id', footballers.update);
api.patch('/api/footballers/:id', footballers.updatePartial);
api.delete('/api/footballers/:id', footballers.remove);

api.listen(10000, err => {
    if (err) return console.log(err);
    return console.log('Server started on port 10000');
});