const catchAsync = require('../utils/catchAsync');
const { todoService} = require('../services');
const pick = require('../utils/pick');

const createTodoTask = catchAsync(async (req, res) => {
  let body = {
    ...req.body,
    userId: req.user._id
  }
  const task = await todoService.createTodoTask(body);
  res.send({ code: 200, message: 'Todo task created', data: task });
});

const updateTodoTask = catchAsync(async(req, res)=>{
  const task = await todoService.updateTodoTask(req.body, req.params.id, req.user._id);
  res.send({ code: 200, message: 'Todo task updated', data: task });
})

const getTodoTaskList = catchAsync(async(req, res)=>{
  const options = pick(req.query, ['limit', 'page']);
  const taskList = await todoService.getTodoTaskList(req.user._id, options)
  res.send({ code: 200, message: 'Todo task list', data: taskList });
})

const deleteTodoTask = catchAsync(async(req, res)=>{
  const isDeleted = await todoService.deleteTodoTask(req.params.id, req.user._id)
  res.send({ code: 200, message: 'Todo task deleted', data: isDeleted });

})

module.exports = {
  createTodoTask,
  updateTodoTask,
  getTodoTaskList,
  deleteTodoTask
};
