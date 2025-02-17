//importation des modules
const app = require('./api/app');
require('dotenv').config();

//set des variables du serveur
const port = process.env.PORT || 4000;
const host = process.env.HOST || 'localhost';

//lancement du serv api
app.listen(port, host, () => console.log(`Server listening on port ${process.env.BASE_URL}`));
