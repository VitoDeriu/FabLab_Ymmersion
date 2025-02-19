const express = require('express');
const path = require('path');
const cors = require('cors');
const session = require('express-session');

const app = express();

// Configuration des middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuration des sessions
app.use(session({
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' }
}));

// Configuration des vues
app.set('views', path.join(__dirname, 'views/pages'));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

// Routes
const mainRoutes = require("./routes/router");
const authRoutes = require("./routes/authRoutes");

app.use('/', mainRoutes);
app.use('/auth', authRoutes);

// Middleware pour gérer les erreurs 404
app.use((req, res) => {
    res.status(404).render('404', { error: 'Page non trouvée' });
});

module.exports = app;
