const owm = require('../pkg/owm');

const getForCity = async (req, res) => {
    try {
        let weather = await owm.getCityWeather(req.params.city);
        res.status(weather);
    } catch (err) {
        return res.status(500).send('Internal server error')
    }
};

module.exports = {
    getForCity
};