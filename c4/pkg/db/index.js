const mongoose = require('mongoose');

const host = '';
const username = '';
const password = '';
const dbname = '';

let DSN = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(
    DSN,
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (err) {
            return console.log("Could not connet to DB:", err);
        }
        console.log('Succesifulu connected to DB');
    });