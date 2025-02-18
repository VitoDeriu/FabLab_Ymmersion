const User = require('../models/user');
const bcrypt = require('bcrypt');
const validator = require('validator');


class AuthController{

    static async Register(req, res) {
        const user = req.body;
        //verifier si les infos sont bien saisies
        if (!user.firstname || !user.lastname || !user.pseudo || !user.email || !user.password || !user.classe ){
            res.status(401).send({
                message : 'Informations Invalides',
                status : 401
            })
        } else if(!validator.isEmail(user.email)){
            res.status(401).send({
                message : 'Email Invalide',
                status : 401
            })
        }
        //hasher le mdp 
        const passwordHashed = await bcrypt.hash(user.password, 10);
        user.password = passwordHashed;
        //appel du model pour créer l'user
        try{
            const userId = await User.createUser(user)
            res.status(200).json({message : 'Utilisateur créer avec succès', userId})
        }catch{
            console.log(user)
            res.status(500).json({error : error.message})
        }
    }




}   

module.exports = AuthController;