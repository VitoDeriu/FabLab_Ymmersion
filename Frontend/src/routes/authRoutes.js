const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

// Routes pour l'affichage des pages
router.get('/login', authController.showLogin);
router.get('/register', authController.showRegister);

// Routes pour le traitement des formulaires
router.post('/login', authController.login);
router.post('/register', authController.register);

// Route de déconnexion
router.get('/logout', authController.logout);

module.exports = router;
