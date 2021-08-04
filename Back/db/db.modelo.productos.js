//Importo los modulos necesarios
const {DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db.conexion')

//Defino los modelos de DB que voy a utilizar

const Productos = sequelize.define('productos', {
    id_producto: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true 
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    calificacion: {
        type: DataTypes.INTEGER(),
        allowNull: false
    },
    marca: {
        type: DataTypes.CHAR(20),
        allowNull: false
    },
    origen: {
        type: DataTypes.CHAR(20),
        allowNull: false
    },
    stock: {
        type:DataTypes.INTEGER(),
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN(),
        allowNull: false
    }
}, {
    timestamps: true
})

module.exports = Productos