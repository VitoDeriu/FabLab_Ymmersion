const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const route = require("./routes/router");
app.use(route);

app.use('/', require('./routes/router'));
module.exports = app;
