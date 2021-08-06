const order = require('../../db/db.model.order');

module.exports.createOrder = async () => {
	try {
		const result = await order.create();
		return result;
	} catch (error) {
		throw error;
	}
};
