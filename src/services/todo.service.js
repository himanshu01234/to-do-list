const { TodoTask } = require('../models');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
/**
 * Create a todoTask
 * @param {Object} body
 * @returns {Promise<User>}
 */
const createTodoTask = async (body) => {
  return await TodoTask.create(body);
};

/**
 * Update a todoTask
 * @param {Object} body
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */

const updateTodoTask = async(body, taskId, userId) => {
    let task = await TodoTask.findOneAndUpdate({_id: taskId, userId: userId}, { $set: body }, { new: true })
    if(!task)
      throw new ApiError(httpStatus.NOT_FOUND, 'Task Not Found');
    return task
}

const getTodoTaskList = async(userId,option) => {
  options = {
    limit: parseInt(option.limit),
    page: parseInt(option.page),
    sort: { createdAt: -1 },
  };
  let taskList = await TodoTask.paginate({userId}, options)
  return taskList
}

const deleteTodoTask = async(taskId, userId) =>{
  const task = await TodoTask.findOne({_id: taskId, userId});
  if(!task)
    throw new ApiError(httpStatus.NOT_FOUND, 'Task not found');
  await task.remove();
  return task;
}
module.exports = {
  createTodoTask,
  updateTodoTask,
  getTodoTaskList,
  deleteTodoTask
};
