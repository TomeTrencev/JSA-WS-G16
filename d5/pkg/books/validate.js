const { Validator } = require('node-input-validator');

const Book = {
    name: 'required|string',
    year: 'required|integer',
    author: 'required|string',
    language: 'required|string',
    pages: 'required|integer'
};

const BookPartial = {
    name: 'string',
    year: 'integer',
    author: 'string',
    language: 'string',
    pages: 'integer'
}


const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if (!e) {
        throw v.errors;
    }
};

module.exports = {
    Book,
    validate,
    BookPartial
};