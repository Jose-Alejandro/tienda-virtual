/** Mercado Libre End points */
const fetch = require('node-fetch');



module.exports = (app) => {
    app.get('/trendProducts', async (req, res) => {
        try {
            let result = await fetch(`https://api.mercadolibre.com/sites/MLM/search?q=${req.query.q}&limit=10`);
            let response = await result.json();
            res.send(response);
        } catch (err) {
            console.log(err);
            res.status(400).json("Call to MercadoLibre Failed, try later" + err);
        }
    });
};






