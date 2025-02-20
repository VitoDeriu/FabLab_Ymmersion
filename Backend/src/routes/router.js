const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware')

const AuthController = require('../controllers/authController');
const UserController = require('../controllers/userController');
const ProjectController = require('../controllers/projectController');

//Routes Users
router.get('/users/all', UserController.GetAllUsers);
router.get('/users/id/:id', UserController.GetUserById);       
router.get('/users/email', UserController.GetUserByEmail);     

//router.put('/users/:id')                                //update user
//router.delete('/users/:id')                             //delete user

//Routes Project
router.get('/project', ProjectController.GetAllProject);
router.get('/project/id/:id', ProjectController.GetProjectById);
router.get('/project/name', ProjectController.GetProjectByName);
router.post('/project/create', upload.single("stlFile"), ProjectController.CreateProject);

//Routes Auth
router.post('/auth/register', AuthController.Register);
router.post('/auth/login', AuthController.Login);


module.exports = router;