const User = require('../models/user');

class UserController{

    static async GetAllUsers(req, res) {
        try{
            const users = await User.getAllUsers();
            res.json(users);
        } catch {
            res.status(500).json({error : error.message})
        }
    }

    static async GetUserByEmail(req, res) {
        const email = req.body

        try {
            const user = await User.getUserByEmail(email.email)
            res.status(200).json(user);
        } catch {
            res.status(500).json({error : error.message})
        }
    }

    static async GetUserByPeudo(req, res) {
        const pseudo = req.body

        try {
            const user = await User.getUserByPseudo(pseudo.pseudo)
            res.status(200).json(user);
        } catch {
            res.status(500).json({error : error.message})
        }
    }

    static async GetUserById(req, res) {
        const id = parseInt(req.params.id, 10)  
        try {
            const user = await User.getUserById(id)
            res.status(200).json(user);
        }catch{
            res.status(500).json({error : error.message})
        }
    }

    // static async DeleteUser(req, res) {}

}

module.exports = UserController;