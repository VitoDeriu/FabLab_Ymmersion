const database = require('../config/database');

class User {
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            database.query('SELECT * FROM users', (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    }
}

module.exports = User;