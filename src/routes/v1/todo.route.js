const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const todoController = require('../../controllers/todo.controller');

const router = express.Router();

router.post('/', auth(), validate(userValidation.createTodo), todoController.createTodoTask);

router.put('/:id', auth(), validate(userValidation.updateTodo), todoController.updateTodoTask);

router.get('/', auth(), todoController.getTodoTaskList);

router.delete('/:id', auth(), validate(userValidation.deleteTask), todoController.deleteTodoTask);

module.exports = router;
