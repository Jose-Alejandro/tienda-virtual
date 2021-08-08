const Joi = require('joi');

module.exports = {
	loginModel: Joi.object().keys(
		{
			email: Joi.string().email().required(),
			userName: Joi.string().alphanum().min(6).max(16).required(),
			password: Joi.string().regex(/^[a-zA-Z0-9]{4,16}$/).min(4).required()
		}).with('userName', 'password'),
	registerModel: Joi.object().keys(
		{
			names: Joi.string().alphanum().min(6).max(50),
			last_names: Joi.string().alphanum().min(6).max(50).required(),
			email: Joi.string().email().required(),
			userName: Joi.string().alphanum().min(6).max(16).required(),
			phone_number: Joi.string().length(10).required(),
			billing_address: Joi.string().alphanum().min(6).max(16).required(),
			delivery_address: Joi.string().alphanum().min(6).max(16).required(),
			password: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required()
		}).with('userName', 'password')
};
