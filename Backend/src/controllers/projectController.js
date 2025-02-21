const Project = require('../models/project');
const User = require('../models/user');

class ProjectController{
    
    static async CreateProject(req, res){
        try{
            const project = req.body

            console.log("req.body :", req.body)
            console.log("req.file :", req.file)

            //verif si on a bien un fichier stl avec 
            if(!req.file){
                return res.status(400).json({ message: "Aucun fichier STL reçu." });
            }

            //verifier si les infos sont bien saisies
            if (!project.name || !project.print_duration || !project.id_user || !project.id_printer ){ //pas de print date parce quelle se mettra lors de la validation
                return res.status(400).json({ message: "Certains champs sont manquants", project });
            }

            //verif si l'utilisateur qui post existe
            const user = await User.getUserById(project.id_user); //a verif si on retourne dasn le catch parce que ca retourne une erreur si y'a rien
            if(!user) {
                return res.status(404).json({ message: "Utilisateur introuvable." });
            }

            project.file = req.file.path

            const projectId = await Project.createProject(project)
            res.status(201).json({message : "projet créé avec succès !", id: projectId})
            
        } catch {
            console.log("erreur lors de la création du porjet")
            res.status(500).json({error : error.message})
        }

    }

    static async GetAllProject(req, res){
        try{
            const project = await Project.getAllProjects();
            res.json(project);
        } catch{
            res.status(500).json({error : error.message})
        }
    }

    // on passe l'id par requete dans l'url 
    static async GetProjectById(req, res){
        const id = parseInt(req.params.id, 10)
        try{
            const project = await Project.getProjectById(id)
            res.status(200).json(project)
        } catch {
            res.status(500).json({error : error.message})
        }
    }
    
    /* Type de json attendu pour la route :
        
        {
            "name" : "Nom du projet"
        }
       
    */
    static async GetProjectByName(req, res) {
        const {name} = req.body
        try{
            const project = await Project.getProjectByName(name)
            res.status(200).json(project)
        } catch {
            res.status(500).json({error : error.message})
        }
    }

    //faire update project
    //faire update feedback
    //faire update status

    //faire delete project

}

module.exports = ProjectController;