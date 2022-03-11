const footballers = require('../pkg/footballers');

const getAll = async (req, res) => {
    try {
        let fudbaleri = await footballers.getAllFootballers();
        return res.status(200).send(fudbaleri);
    } catch (err) {
        console.log(err)
        return res.status(500).send("Internal Server Error")
    }
};

const getOne = async (req, res) => {
    try {
        let fudbaler = await footballers.getOneFootballer(Number(req.params.id));
        return res.status(200).send(fudbaler);
    } catch (err) {
        console.log(err)
        return res.status(500).send("Internal Server Error")
    }
};

const create = async (req, res) => {
    try {
        await footballers.addFootballer(req.body);
        return res.status(201).send(req.body);
    } catch (err) {
        console.log(err)
        return res.status(500).send("Internal Server Error");
    }
};

const update = async (req, res) => {
    try {
        await footballers.updateFootballer(Number(req.params.id), req.body);
        return res.status(204).send("");
    } catch (err) {
        console.log(err)
        return res.status(500).send("Internal Server Error");
    }
};

const updatePartial = async (req, res) => {
    try {
         await footballers.updateOneFootballer(Number(req.params.id), req.body);
         return res.status(204).send("")
        
    } catch (err) {
        console.log(err)
        return res.status(500).send("Internal Server Error");
    }

};



const remove = async (req, res) => {
    try {
        await footballers.removeFootballer(Number(req.params.id));
        return res.status(204).send("");
    } catch (err) {
        console.log(err)
        return res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove
}