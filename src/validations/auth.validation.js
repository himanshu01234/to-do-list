const Joi = require('@hapi/joi');

const register = {
  body: Joi.object().keys({
    email: [Joi.string().optional().email(), Joi.allow(null)],
    password: [Joi.string().optional(), Joi.allow(null)],
    name: [Joi.string().optional(), Joi.allow(null)]
  }),
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required()
  }),
};

module.exports = {
  register,
  login
};
