const mongoose = require('mongoose');

const Actor = mongoose.model(
    'actors',
    {
        name: String,
        age: Number,
        hasWonOscar: Boolean
    },
    'actors'
);

const getAllActors = async () => {
    return await Actor.find({});
};

const getOne = async (id) => {
    return await Actor.findOne({ _id: id });
};

const addActor = async (actor) => {
    let c = new Actor(actor);
    return await c.save();
};

const updateActor = async (id, actor) => {
    return await Actor.updateOne({ _id: id }, actor);
};

const removeActor = async (id) => {
    return await Actor.deleteOne({ _id: id });
};


module.exports = {
    getAllActors,
    getOne,
    addActor,
    updateActor,
    removeActor
}