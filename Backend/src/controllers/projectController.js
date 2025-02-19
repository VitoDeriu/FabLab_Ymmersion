const Project = require('../models/project');

class ProjectController{
    static async CreateProject(req, res){
        try{

        } catch {

        }
    }

    static async GetAllProject(req, res){
        try{
            const project = await Project.getAllProjects();
            res.json
        } catch{

        }
    }

}

module.exports = ProjectController;