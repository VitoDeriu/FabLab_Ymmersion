const Project = require('../models/project');

class ProjectController{
    
    static async CreateProject(req, res){
        const project = req.body;
        if(!project){
            res.status(401).send({
                message : 'Informations Invalides',
                status : 401
            })}
        try{
            const projectId = await Project.createProject(project)
            res.status(200).json({message : 'Project créer avec succès, id : ', projectId})
        } catch {
            console.log(user)
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

    static async GetProjectById(req, res) {
        const id = parseInt(req.param.id, 10)
        try{
            const project = await Project.getProjectById(id)
            res.status(200).json(project)
        } catch {
            res.status(500).json({error : error.message})
        }
    }
    
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