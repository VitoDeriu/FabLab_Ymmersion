const express = require('express');
const path = require('path')
const cors = require('cors');

const app = express();
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

const route = require("./routes/router");
app.use(route);

module.exports = app;
