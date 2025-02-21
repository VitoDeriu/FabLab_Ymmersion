const database = require('../config/database');

class Project {

    static createProject(project){
        return new Promise((resolve, reject)=> {
            const sql = `INSERT INTO project (name, file, created_at, print_duration, description, id_user, id_printer, id_status)
                        VALUES (?, ?, NOW(), ?, ?, ?, ?, 1);`

            const value = [
                project.name, 
                project.file,               //stocker le chemin du fichier dans la db
                project.print_duration,     //l'avoir en seconde
                project.description,
                project.id_user,
                project.id_printer
            ];

            database.query(sql, value, (err, results) =>{
                if (err) reject(err)
                else resolve(results.insertId)
            })
        })
    }

    static getAllProjects(){
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM project;`
            database.query(sql, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    }

    static getProjectById(id) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * 
                        FROM project 
                        WHERE id = ?;`
            database.query(sql, id, (err, results) => err ? reject(err) : resolve(results[0]))
        })
    }

    static getProjectByName(name) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * 
                        FROM project 
                        WHERE name = ?;`
            database.query(sql, name, (err, results) => {
                if (err) reject(err)
                else resolve(results)
            })
        })
    }

    //faire update project
    //faire update feedback
    //faire update status

    //faire delete project
}

module.exports = Project;