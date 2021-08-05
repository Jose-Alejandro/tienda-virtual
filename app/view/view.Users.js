const controlersUsers = require('../controler/controlers.Users');
const middlewares = require('../../middlewares/middlewares');

module.exports = async (app) => {

	app.post('/users/register', async (req, res) => {
		let newUser = req.body;
		try {
			const ok = await controlersUsers.registerUser(newUser);
			if (ok) {
				res.status(200).json(newUser);
			} else
				throw new Error('Internal error with the server, try again later');
		} catch (error) {
			console.log('error: ' + error.message);
			res.status(500).send('error: ' + error.message);
		}
	});

	app.post('/users/login', async (req, res) => {
		let user = req.body;
		try {
			const ok = await controlersUsers.validateUser(user);
			if (ok) {
				let sessionToken = await controlersUsers.generateUserToken(user);
				res.json(sessionToken);
			} else
				throw new Error("Invalid user, if deactivated please contact adminsitrator to reactivate it");
		} catch (error) {
			console.log('error: ' + error.message);
			res.status(400).send(error.message);
		}
	});

	app.get('/user', middlewares.validateToken, async (req, res) => {
		try {
			let user = await controlersUsers.retrieveUser(req.params.user);
			res.status(200).json(user);
		} catch (error) {
			console.log('error: ' + error.message);
			res.status(400).send(error.message);
		}
	});

	app.post('/user', middlewares.validateToken, async (req, res) => {
		let modifiedUser = req.body;
		try {
			let result = await controlersUsers.modifyUser(modifiedUser);
			if (result != undefined) {
				res.status(200).json('User succesfully updated: ' + result);
			} else
				throw new Error('Internal error with the server, try again later');
		} catch (error) {
			console.log('error: ' + error.message);
			res.status(500).send('error: ' + error.message);
		}
	});

	app.delete('/user', middlewares.validateToken, async (req, res) => {
		try {
			let user = await controlersUsers.deleteUser(req.params.user);
			res.status(200).json(user);
		} catch (error) {
			console.log('error: ' + error.message);
			res.status(400).send(error.message);
		}
	});

};
