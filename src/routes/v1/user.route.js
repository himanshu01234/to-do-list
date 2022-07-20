const express = require('express');
const auth = require('../../middlewares/auth');
const userController = require('../../controllers/user.controller');

const router = express.Router();
router.get(('/'), auth(), userController.getUser)

module.exports = router;
