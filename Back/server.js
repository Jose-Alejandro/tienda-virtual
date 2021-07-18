/** Import required modules */

const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const middlewares = require('./middlewares/middlewares');
const mercadolibreRoutes = require('./routes/mercado-libre.routes');

/** Global middlewares */
app.use(cors());
app.use(express.json());
app.use(middlewares.limiter);

/** Create server */
app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server started at http://${process.env.HOST}:${process.env.PORT}`);
});


/** Start API routes */
mercadolibreRoutes(app);
