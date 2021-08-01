const modelsUsers = require('../model/models.Users');

module.exports.registerUser = async (newUser) => {
	try {
		if (await modelsUsers.RegisterUser(newUser)) {
			return newUser.userName;
		}
		throw new Error('An internal error has ocurred, try later');
	} catch (error) {
		throw error;
	}
};
