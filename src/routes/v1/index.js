const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const todoRoute = require('./todo.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/users', userRoute);
router.use('/todo', todoRoute);

module.exports = router;
