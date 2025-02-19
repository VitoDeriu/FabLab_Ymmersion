const database = require('../config/database');

class Project {

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