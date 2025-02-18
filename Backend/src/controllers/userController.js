const UserController = require('../models/user');

class UserController{
    static GetAllUsers(req, res) {
        

    }


}

exports.getAllUsers = (req, res) => {
    User.getAllUsers((err,users)=>{
        if (err) {
            return res.status(500).json({error: err.message });
        }
        res.json(users); 
    })
}