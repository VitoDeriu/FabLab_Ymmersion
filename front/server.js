//importation des modules
const app = require('./src/app');
require('dotenv').config();

//set des variables du serveur
const port = process.env.PORT;
const host = process.env.HOST;

//lancement du serv api
app.listen(port, host, () => console.log(`Server listening on port ${process.env.BASE_URL}`));