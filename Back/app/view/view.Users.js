const controlersUsers = require('../controler/controlers.Users');

module.exports = async (app) => {
	app.post('/users/register', async (req, res) => {
		let newUser = req.body;
		try {
			if (await controlersUsers.registerUser(newUser)) {
				res.status(200).json(newUser);
			}
			throw new Error('Internal error with the server, try again later');
		} catch (error) {
			console.log('error: ' + error.message);
			res.status(500).json({ error: error.message });
		}
	});
};
