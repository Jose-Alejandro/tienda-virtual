const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.conection');


const Orders = sequelize.define('orders', {},
	{
		timestamps: true
	}
);

module.exports = Orders;
