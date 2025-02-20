const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware')

const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/userController');
const ProjectController = require('../controllers/projectController');

//Routes Users
router.get('/users', UserController.GetAllUsers);
router.get('/users/:id', UserController.GetUserById);   //get user by id
//router.put('/users/:id')                                //update user
//router.delete('/users/:id')                             //delete user

//Routes Project
router.get('/project', ProjectController.GetAllProject);
router.get('/project/:id', ProjectController.GetProjectById);
router.post('/project/create', upload.single("stlFile"), ProjectController.CreateProject);

//Routes Auth
router.post('/auth/register', AuthController.Register);


module.exports = router;