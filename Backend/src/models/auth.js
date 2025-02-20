const database = require('../config/database');

class Auth{

    static register(user) {
        console.log('user dans authmodel :',user)
        return new Promise((resolve, reject) =>{
            //la requete avec les ? pour eviter les injestion sql (le NOW() donne la date actuelle pour le created_at)
            const sql = `INSERT INTO users (firstname, lastname, pseudo, email, password, is_admin, created_at, id_class)
             VALUES (?, ?, ?, ?, ?, ?, NOW(), ?);`
    
            //les valeurs pour remplacer les ?
            const value = [
                user.firstname,
                user.lastname, 
                user.pseudo, 
                user.email, 
                user.password, 
                user.is_admin,
                user.id_class
            ];
    
            //execution de la requete
            console.log("value :", value)
            database.query(sql, value, (err, result) =>{
                if(err) reject(err)
                else resolve(result.insertId)
            });
        });
    }
}

module.exports = Auth;