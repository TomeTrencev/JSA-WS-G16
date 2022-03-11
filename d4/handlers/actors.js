const actors = require('../pkg/actors/index');

const getAll = async (req, res) => {
    try {
        let c = await actors.getAllActors();
        return res.status(200).send(c);
    } catch (error) {
        console.log(error)
        return res.status(500).send('Server Error');
    }
};

const getOne = async (req, res) => {
    try {
        let c = await actors.getOne(req.params.id);
        return res.status(200).send(c)
    } catch (error) {
        console.log(error)
        return res.status(500).send('Server Error');
    }
};

const create = async (req, res) => {
    try {
        let c = await actors.addActor(req.body);
        return res.status(201).send(c);
    } catch (error) {
        console.log(error)
        return res.status(500).send('Server Error');
    }
};

const update = async (req, res) => {
    try {
        await actors.updateActor(req.params.id, req.body);
    } catch (error) {
        console.log(error)
        return res.status(500).send('Server Error');
    }
};

const remove = async (req, res) => {
    try {
        await actors.removeActor(req.params.id);
    } catch (error) {
        console.log(error)
        return res.status(500).send('Server Error');
    }
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}