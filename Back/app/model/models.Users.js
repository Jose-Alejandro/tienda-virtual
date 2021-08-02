const users = require('../../db/db.model.users');


module.exports.RegisterUser = async (user) => {
	try {
		let exists = await users.findOne({ where: { email: user.email } });
		if (exists != null) {
			throw new Error('User already exists');
		} else {
			await users.create(user);
			return true;
		}
	} catch (error) {
		throw error;
	}
};

module.exports.UserExists = async (user) => {
	try {
		let exists = await users.findOne({
			where: {
				email: user.email,
				userName: user.userName,
				password: user.password,
				active: 'true',
				role: 'user'
			}
		});
		if (exists != null) {
			return true;
		}
		return false;
	} catch (error) {
		throw error;
	}
};
