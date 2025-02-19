const database = require('../config/database');

class User {
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM users;`

            database.query(sql, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    }

    static getUserById(id){
        return new Promise((resolve, reject) =>{
            const sql = `SELECT * 
                        FROM users
                        WHERE id = ?;`
            database.query(sql, id, (err, results) => {
                if (err) reject(err)
                else resolve(results)
            })
        })

    }



    static deleteUser(id) {
        return new Promise ((resolve, reject) => {

        })
    }

}

module.exports = User;