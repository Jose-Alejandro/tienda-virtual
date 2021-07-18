/** Mercado Libre End points */
const fetch = require('node-fetch');
const middlewares = require('../middlewares/middlewares');
const cors = require('cors');


module.exports = (app) => {
    app.get('/trendProducts', cors(middlewares.corsOption), async (req, res) => {
        try {
            let result = await fetch(`https://api.mercadolibre.com/sites/MLM/search?q=${req.query.q}&limit=10`);
            let response = await result.json();
            res.send(response);
        } catch (err) {
            console.log(err);
            res.status(400).json("Call to Mercado Libre Failed, try later" + err);
        }
    });
};
