/** Import modules */
const rateLimit = require("express-rate-limit");


/** Rate limiter middleware */
const limiter = rateLimit({
	windowMs: 10 * 60 * 1000,
	max: 100,
	message: 'Requests exceeded, wait 10 minutes'
});

/** cors option middleware for whitelist*/

const corsOption = {
	origin: function (origin, callback) {
		if (process.env.WHITE_LIST.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error('Not authorized by CORS'));
		}
	}
};

module.exports = { corsOption, limiter };
