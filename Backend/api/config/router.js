const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.Home);

router.get('/users')
router.get('/user/:id')
router.get('/')

module.exports = router;