
const files = require('../files');

const CONFIG_SOURCE = `${__dirname}/../../config.json`;

(async () => {
    if (config === null) {
        config = await files.readData(CONFIG_SOURCE)
    }
})();

const get = (section) => {
    if (!config[section]) {
        throw `Configiration section "${section}" does not exist`;
    }
    return config[section]
};

module.exports = {
    get
}