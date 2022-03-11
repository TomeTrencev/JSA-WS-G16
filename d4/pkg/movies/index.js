
const mongoose = require('mongoose');

const Movie = mongoose.model(
    'movies',
    {
        name: String,
        premiere: Date,
        genre: String,
        actors: Array,
        awards: Array,
        director: String
    },
    'movies'
);

const getAllMovies = async () => {
    return await Movie.find({});
};

const addMovie = async (movie) => {
    let c = new Movie(movie);
    return await c.save();
};


const updateMovie = async (id, movie) => {
    return await Movie.updateOne({ _id: id }, movie);

};

const getMovieByIndex = async (id) => {
    return await Movie.findOne({ _id: id });
};

const removeMovie = async (id) => {
    return await Movie.deleteOne({ _id: id });
};


module.exports = {
    addMovie,
    removeMovie,
    updateMovie,
    getAllMovies,
    getMovieByIndex
};