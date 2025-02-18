const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const route = require("./config/router");
app.use(route);

app.use('/', require('./config/router'));
module.exports = app;
