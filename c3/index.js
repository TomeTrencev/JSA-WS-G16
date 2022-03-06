const express = require('express');
const cars = require('./handlers/cars');

const api = express();

api.use(express.json());

api.get('/api/cars', cars.getAll);
api.get('/api/cars/:id', cars.getOne);
api.post('/api/cars', cars.create);
api.put('/api/cars/:id', cars.update);
api.patch('/api/cars/:id', cars.updatePartial);
api.delete('/api/cars/:id', cars.remove);

api.listen(10000, err => {
    if(err) return console.log(err);
    return console.log('Server started on port 10000');
});


//REST API

//POST - create data record
//GET - retriev data record
//PUT - UPDATE whole data record
//PATCH - partial update of data record
//DELETE - delete




//users is a data resource 

//GET /api/users list - list all users [200,500]
//GET /api/users/id - get data for user with id = :id [200,404,500]
//POST /api/users - create user (ONLY ONE) [201,400,500]
//PUT /api/users/:id - update user with id = :id [200,400,404,500]
//PATCH api/users/:id - partial update user with id = :id [200,400,404,500]
//DELETE /api/users/:id - delete a user with id = :id [204,404,400,500]


//users subresources 
//GET /api/users/:id/location - get the location for user with id = :id
//PUT /api/users/:id/location
//PATCH /api/users/:id/location


// 200 succes (200-ok , 201- created, 204- no content)
// 300 redirect
// 400 aplication error
// 500 server error