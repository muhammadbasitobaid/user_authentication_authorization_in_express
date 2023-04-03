const db = require('../models/index');
const jwt = require('jsonwebtoken');
const UserAuth = db.UserAuth;
var bcrypt = require('bcryptjs');
exports.loginUser = (req, res) => { 
    res.send("logged in!")
  }
  
exports.registerUser = async(req, res) => {
    const {firstName, lastName, email, password} = req.body;
    if(!(firstName, lastName, email, password)){
        res.status(400).json({message: "All the fields are required to register the user"})
    }
const project = await UserAuth.findOne({ where: { email} });
if(project){
    res.status(400).json({message: "User already exist please try with different email"})
}
const hashedPassword = bcrypt.hash(password, 10);
const newUser = UserAuth.create({
    firstName,
    lastName,
    password: hashedPassword,
    email: email.toLowerCase()
})
const token = jwt.sign({
    user_id: user._id,
    email
}, )
    res.send("user registered successfully")
}