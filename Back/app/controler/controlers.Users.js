const modelsUsers = require('../model/models.Users');
const jwt = require('jsonwebtoken');

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

module.exports.validateUser = async (usr) => {
	try {
		if (await modelsUsers.UserExists(usr)) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		console.log(error.message);
		throw error;
	}
};

module.exports.generateUserToken = async (user) => {
	const token = jwt.sign(
		{ data: user },
		process.env.SECRET_KEY
	);
	return token;
};

module.exports.verifyUserToken = async (token) => {
	try {
		const decodedUser = jwt.verify(token, process.env.SECRET_KEY);
		if (decodedUser) {
			return decodedUser;
		}
	} catch (error) {
		throw error;
	}
};

module.exports.retrieveUser = async (user) => {
	try {
		return await modelsUsers.retrieveUser(user);;
	} catch (error) {
		throw error;
	}
};
