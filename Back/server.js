/** Import required modules */

const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const middlewares = require('./middlewares/middlewares');
const mercadolibreRoutes = require('./app/view/mercado-libre.routes');
const viewUsers = require('./app/view/view.Users');
const db = require('./db/db.conection');


/** Global middlewares */
app.use(cors());
app.use(express.json());
app.use(middlewares.limiter);


/** Start server */
async function startServer() {
	try {
		// await users.sync();
		await db.authenticate();
		console.log('Conected to Database');
		app.listen(process.env.PORT, process.env.HOST, () => {
			console.log(`Server started at http://${process.env.HOST}:${process.env.PORT}`);
		});
	} catch (error) {
		console.error('Conection to Database failed: ' + error.message);
	}
}

startServer();

/** Start API routes */
mercadolibreRoutes(app);

viewUsers(app);
