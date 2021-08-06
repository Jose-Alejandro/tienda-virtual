const modelsSells = require('../model/models.orders');
module.exports.createOrder = async () => {
	try {
		let order = await modelsSells.createOrder();
		return order.id;
	} catch (error) {
		throw error;
	}
};
