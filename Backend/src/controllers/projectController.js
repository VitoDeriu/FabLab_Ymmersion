const Project = require('../models/project');

class ProjectController{
    static async CreateProject(req, res){
        try{
            const project = req.body;
        } catch {

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

}

module.exports = ProjectController;