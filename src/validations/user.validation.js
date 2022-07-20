const Joi = require('@hapi/joi');
const { objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().required(),
  }),
};

const createTodo = {
  body: Joi.object().keys({
    content: Joi.string().required()
  }),
}

const updateTodo = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    content: Joi.string().required()
  }),
}

const deleteTask = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  createTodo,
  updateTodo,
  deleteTask
};
