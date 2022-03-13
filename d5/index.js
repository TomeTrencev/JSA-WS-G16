const config = require('./pkg/config');
require('./pkg/db');

const express = require('express');
const books = require('./handlers/books');

const api = express();

api.use(express.json());

api.get('/api/books', books.getAll);
api.get('/api/books/:id', books.getOne);
api.post('/api/books', books.create);
api.put('/api/books/:id', books.update);
api.patch('/api/books/:id', books.updatePartial);
api.delete('/api/books/:id', books.remove);

api.listen(config.get('service').port, err => {
    if (err) return console.log(err);
    return console.log(`Server is started on port ${config.get('service').port}`);
});
