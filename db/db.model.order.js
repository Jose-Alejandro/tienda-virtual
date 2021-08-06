const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.conection');


const Orders = sequelize.define('orders',
	{
		delivery_date: {
			type: DataTypes.STRING(50),
			allowNull: true
		}
	},
	{
		timestamps: true
	}
);

module.exports = Orders;
