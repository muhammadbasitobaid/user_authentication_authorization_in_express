const express = require('express');
const app = express();
const db = require('./app/models/');
const cors = require('cors');
const port = 5000;
const authUser = require('./app/controllers/authUser.controller')
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
db.sequelize.sync();
app.post('/register', authUser.registerUser)
 app.post('/login', authUser.loginUser)
app.listen(port, (req, res) => { console.log(`The server is listening on port ${port}`) });