const files = require('../files');
const DATA_SOURCE = `${__dirname}/../../data`;

const getAllFootballers = async () => {
    try {
        let data = await files.readData(DATA_SOURCE);
        return data;
    } catch (err) {
        throw err;
    }
};

const getOneFootballer = async (index) => {
    try {
        let data = await files.readData(DATA_SOURCE);
        return data[index];
    } catch (err) {
        throw err;
    }
};

const addFootballer = async (fudbaler) => {
    try {
        let data = await files.readData(DATA_SOURCE);
        data.push(fudbaler);
        await files.writeData(data, DATA_SOURCE);
    } catch (err) {
        throw err;
    }
};

const updateFootballer = async (index, fudbaler) => {
    try {
        let data = await files.readData(DATA_SOURCE);
        let out = data.map((c, i) => {
            if (index === i) {
                c = fudbaler;
            }
            return c;
        });
        await files.writeData(out, DATA_SOURCE);
    } catch (err) {
        throw err;
    }
};

const updateOneFootballer = async (index, fudbaler) => {
    try {
        let data = await files.readData(DATA_SOURCE);
        let out = data.map((c, i) => {
            if (index === i) {
                c = {
                    ...c,
                    ...fudbaler,

                };
            }
            return c;
        });
        await files.writeData(out, DATA_SOURCE);
    } catch (err) {
        throw err;
    }
};


const removeFootballer = async (index) => {
    try {
        let data = await files.readData(DATA_SOURCE);
        let out = data.filter((_, i) => index !== i);
        await files.writeData(out, DATA_SOURCE);
    } catch (err) {
        throw err;
    }
};


module.exports = {
    getAllFootballers,
    getOneFootballer,
    addFootballer,
    updateFootballer,
    removeFootballer,
    updateOneFootballer
}