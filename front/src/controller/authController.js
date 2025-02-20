const axios = require('axios');

const API_URL = process.env.BACKEND_URL || 'http://localhost:4000/';

const authController = {
    // Afficher la page de connexion
    showLogin: (req, res) => {
        res.render('login', { error: null });
    },

    // Afficher la page d'inscription
    showRegister: (req, res) => {
        res.render('register', { error: null });
    },

    // Gérer la connexion
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const response = await axios.post(`${API_URL}/auth/login`, {
                email,
                password
            });

            // Stocker le token dans une session ou un cookie
            req.session.token = response.data.token;
            req.session.user = response.data.user;

            res.redirect('/dashboard');
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Une erreur est survenue';
            res.render('login', { error: errorMessage });
        }
    },

    // Gérer l'inscription
    register: async (req, res) => {
        try {
            const { name, email, password, confirmPassword } = req.body;

            if (password !== confirmPassword) {
                return res.render('register', { error: 'Les mots de passe ne correspondent pas' });
            }

            const response = await axios.post(`${API_URL}/auth/register`, {
                name,
                email,
                password
            });

            // Rediriger vers la page de connexion après l'inscription
            res.redirect('/auth/login');
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Une erreur est survenue';
            res.render('register', { error: errorMessage });
        }
    },

    // Gérer la déconnexion
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/auth/login');
    }
};

module.exports = authController;
