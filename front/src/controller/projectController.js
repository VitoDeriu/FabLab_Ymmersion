class ProjectController {
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
}

module.exports = ProjectController;
