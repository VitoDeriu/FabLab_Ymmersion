class ProjectController {
  //page projet pour 1 seul projet, on peut la récup avec l'index du projet

  static async GetProject(req, res) {
    try {
      const response = await fetch('http://localhost:4000/project'); // Appel API
      const data = await response.json(); // Conversion en JSON

      res.render('projects', { projects: data }); // Envoi des données à la page EJS
    } catch (err) {
      console.error("Erreur lors de la récupération des projets :", err);
      res.status(500).send('Erreur serveur');
    }
  }

  //create project qui envoi un json avec le fichier dans localhost:4000/project/create
}

module.exports = ProjectController;
