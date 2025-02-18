const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/authController');
const UserController = require('../controllers/userController');

router.get('/users', UserController.GetAllUsers);
router.get('/users/:id', UserController.GetUserById);        //get user by id
router.post('/users', AuthController.Register);           //create user
router.put('/users/:id')        //update user
router.delete('/users/:id')     //delete user

module.exports = router;