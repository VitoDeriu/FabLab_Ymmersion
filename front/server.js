//importation des modules
const app = require('./src/app');
require('dotenv').config();

//set des variables du serveur
const port = process.env.PORT || 3030;
const host = process.env.HOST || 'localhost';

//lancement du serv api
app.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
});