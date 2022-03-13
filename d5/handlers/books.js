const books = require('../pkg/books');
const validator = require('../pkg/books/validate');

const getAll = async (req, res) => {
    try {
        let cs = await books.getAllBooks();
        return res.status(200).send(cs);
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const getOne = async (req, res) => {
    try {
        let cs = await books.getOne(req.params.id);
        return res.status(200).send(cs);
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const create = async (req, res) => {
    try {
        await validator.validate(req.body, validator.Book);
        let c = await books.addBook(req.body);
        return res.status(201).send(c);
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const update = async (req, res) => {
    try {
        await validator.validate(req.body, validator.Book);
        await books.updateBook(req.params.id, req.body);
        return res.status(204).send("");
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const updatePartial = async (req, res) => {
    try {
        await validator.validate(req.body, validator.BookPartial);
        await books.updateBook(req.params.id, req.body);
        return res.status(204).send("");
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

const remove = async (req, res) => {
    try {
        await books.removeBook(req.params.id);
        return res.status(204).send("");
    } catch (err) {
        console.log(err)
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAll,
    getOne,
    update,
    updatePartial,
    remove,
    create
};