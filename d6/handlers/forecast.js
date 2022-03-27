const owm = require('../pkg/owm');

const getForCity = async (req, res) => {
    try {
        let forecast = await owm.getCityForecast(req.params.city);
        res.send(forecast)
    } catch (err) {
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getForCity
};