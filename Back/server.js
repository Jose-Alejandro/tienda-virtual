/** Import required modules */

const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const middlewares = require('./middlewares/middlewares');
const mercadolibreRoutes = require('./app/view/mercado-libre.routes');
const sequelize = require('./db/db.conexion');
const viewProducts = require('./app/view/view.products');
const productos = require('./db/db.modelo.productos');

// Antes de usar middlewarenpm install body-parser
const bodyParser = require('body-parser');


//Utilice middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


/** Global middlewares */
app.use(cors());
app.use(express.json());
app.use(middlewares.limiter);

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


//Levantamos nuestro servidor
async function inicioServer() {
    try {
        await productos.sync({alter:true})
        await sequelize.authenticate()
        console.log('Conección estabilizada con DB correctamente');
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        });
      } catch (error) {
        console.error('No se pudo conectar correctamebte con la Base de datos:', error);
      }
}

inicioServer();

/** Start API routes */
mercadolibreRoutes(app);
viewProducts(app);
