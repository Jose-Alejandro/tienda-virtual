const controlerSells = require('../controler/controlers.sells');
const middlewares = require('../../middlewares/middlewares');

module.exports = async (app) => {
	app.post('/user/orders', middlewares.validateToken, async (req, res) => {
		try {
			/** Dev code */
			// console.log(req.params);
			// console.log(req.body);
			/** dev code */
			let id = await controlerSells.createOrder();
			res.status(200).json(id);
		} catch (error) {
			res.status(500).send(error.message);
		}
	});
};
