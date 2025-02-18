const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/authController');
const UserController = require('../controllers/userController');

router.get('/users', UserController.getAllUsers);

module.exports = router;