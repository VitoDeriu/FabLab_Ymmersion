const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); //ATTENTION chat m'a dit de le mettre dans serveur pour que ce soit a la racine... a verifier si ca bug

const route = require("./routes/router");
app.use(route);

app.use('/', require('./routes/router'));
module.exports = app;
