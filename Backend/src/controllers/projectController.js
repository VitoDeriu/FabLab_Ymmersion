const Project = require('../models/project');

class ProjectController{
    
    static async CreateProject(req, res){
        
        const project = req.body
        


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
        const id = parseInt(req.param.id, 10)
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
        const name = req.body
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