const express = require('express');
const router = express.Router();

const HomeController = require('../controller/homeController');
const MachinesController = require('../controller/machinesController');
const ProjectController = require('../controller/projectController');


router.get('/', HomeController.Index);
router.get('/machines', MachinesController.Index);
router.get('/project', ProjectController.GetProject);


module.exports = router;