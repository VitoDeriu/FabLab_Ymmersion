const database = require('../config/database');

class Auth{
    static Register(user) {
        return new Promise((resolve, reject) =>{
            //la requete avec les ? pour eviter les injestion sql (le NOW() donne la date actuelle pour le created_at)
            const sql = `INSERT INTO users (firstname, lastname, pseudo, email, password, created_at, id_role, id_class)
             VALUES (?, ?, ?, ?, ?, NOW(), ?, ?);`
    
            //les valeurs pour remplacer les ?
            const value = [
                user.firstname,
                user.lastname, 
                user.pseudo, 
                user.email, 
                user.password, 
                1, 
                user.classe
            ];
    
            //execution de la requete
            database.query(sql, value, (err, result) =>{
                if(err){
                    console.log("variable d'entrée user : ", user)
                    console.log(sql, value)
                    return reject(err);
                }
                resolve(result.insertId);
            });
        });
    }
}

module.exports = Auth;