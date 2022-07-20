const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService } = require('../services');
const ApiError = require('../utils/ApiError');

const register = catchAsync(async (req, res) => {
  let user = await userService.createUser(req.body);
  const token = await tokenService.generateAuthTokens(user);
  res.send({ code: 200, message: 'User registered', data: { user, ...token } });
  
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const token = await tokenService.generateAuthTokens(user);
  res.send({ code: 200, message: 'LoggedIn successfully', data: { user, ...token } });
});

module.exports = {
  register,
  login
};
