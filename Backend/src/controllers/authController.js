const Auth = require('../models/auth');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const validator = require('validator');


class AuthController{

    static async Register(req, res) {
        try{
            const user = req.body;

            console.log('user au debut du try :',user)

            //verifier si les infos sont bien saisies
            if (!user.firstname || !user.lastname || !user.pseudo || !user.email || !user.password || !user.id_class ){
                return res.status(400).json({ message: "Tous les champs sont requis" });
            } else if (!validator.isEmail(user.email)){
                return res.status(401).json({message : 'Email Invalide'});
            }

            // Vérifier si l'email ou le pseudo existent déjà
            const existingUser = await User.getUserByEmail(user.email);
            console.log('existing user :', existingUser)
            if (existingUser != null) {
                return res.status(409).json({ message: "Cet email est déjà utilisé" });
            }
            
            //vérifier si le pseudo existe déjà
            const existingPseudo = await User.getUserByPseudo(user.pseudo);
            console.log('existing pseudo :', existingPseudo)
            if (existingPseudo != null) {
                return res.status(409).json({ message: "Ce pseudo est déjà utilisé" });
            }

            //hasher le mdp 
            user.password = await bcrypt.hash(user.password, 10);
            console.log('user.password :', user.password)

            //appel du model pour créer l'user
            console.log("user avant l'appel du register model :", user)
            const userId = await Auth.register(user)
            res.status(200).json({message : 'Utilisateur créer avec succès', userId})
                
        } catch {
            res.status(500).json({error : error.message})
        }
    }

    static async Login(req, res) {
        try {
            const {email, password} = req.body

            //check si pas vide
            if (!email || !password) {
                return res.status(400).json({ message: "Email et mot de passe requis" });
            }

            //get les infos de l'user pour avoir le mdp
            const user = await User.getUserByEmail(email)
            if(!user){
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }

            //verif du mdp
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                return res.status(401).json({ message: "Mot de passe incorrect" });
            }

            //si tout va bien on renvoi les infos du user avec un 200
            res.status(200).json({ message: "Connexion réussie", user });

        } catch {
            res.status(500).json({error : error.message})
        }
    }
}   

module.exports = AuthController;