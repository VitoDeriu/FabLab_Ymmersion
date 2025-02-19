const database = require('../config/database');

class Project {

    static createProject(project){
        return new Promise((resolve, reject)=> {
            const sql = `INSERT INTO project (name, file, created_at, print_date, print_duration, description, email, id_printer, id_status)
                        VALUES (?, ?, NOW(), ?, ?, ?, ?, ?, ?);`

            const value = [
                project.name, 
                project.file,
                project.print_date, //faut recup un timestamp a voir comment faire 
                project.print_duration, //l'avoir en seconde
                project.descripton,
                project.email, 
                project.id_printer, 
                project.id_status
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
            database.query(sql, id, (err, results) => {
                if (err) reject(err)
                else resolve(results)
            })
        })
    }

}

module.exports = Project;