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

    static getUserByEmail(email){
        return new Promise((resolve, reject) => {
            const sql = `SELECT *
                        FROM users
                        WHERE email = ?;`
            console.log('email dans user model :', email)
            database.query (sql, email, (err, results) => {
                if (err) {
                    reject(err);  // Erreur SQL réelle
                } else {
                    resolve(results.length > 0 ? results[0] : null); // Renvoie null si aucun utilisateur n'est trouvé
                }
            })
        })
    }

    static getUserByPseudo(pseudo){
        return new Promise((resolve, reject) => {
            const sql = `SELECT *
                        FROM users
                        WHERE pseudo = ?;`
            console.log('pseudo dans user model :', pseudo)
            database.query (sql, pseudo, (err, results) => {
                if (err) {
                    reject(err);  // Erreur SQL réelle
                } else {
                    resolve(results.length > 0 ? results[0] : null); // Renvoie null si aucun utilisateur n'est trouvé
                }
            })
        })
    }

    static getUserById(id){
        return new Promise((resolve, reject) => {
            const sql = `SELECT * 
                        FROM users
                        WHERE id = ?;`
            database.query(sql, id, (err, results) => err ? reject(err) : resolve(results[0]))
        })
    }

    static deleteUser(id) {
        return new Promise ((resolve, reject) => {

        })
    }

}

module.exports = User;