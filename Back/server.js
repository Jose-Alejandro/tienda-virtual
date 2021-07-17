/** Import required modules */

const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

/** Config server */
const app = express();


/** Global middlewares */
app.use(cors());
app.use(express.json());

/** create server */
app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server starte at ${process.env.HOST}:${process.env.PORT}`);
});

/** end points */
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
