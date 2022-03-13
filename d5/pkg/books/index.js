const mongoose = require('mongoose');

const Book = mongoose.model(
    'books',
    {
        name: String,
        year: Number,
        author: String,
        language: String,
        pages: Number

    },
    'books'
);

const getAllBooks = async () => {
    return await Book.find({});
};

const getOne = async (id) => {
    return await Book.findOne({ _id: id });
};

const addBook = async (book) => {
    let b = new Book(book);
    return await b.save();
};

const updateBook = async (id, book) => {
    return await Book.updateOne({ _id: id }, book);
};

const removeBook = async (id) => {
    return await Book.deleteOne({ _id: id });
};

module.exports = {
    getAllBooks,
    getOne,
    addBook,
    updateBook,
    removeBook
}