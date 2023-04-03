const { UUIDV4 } = require("sequelize");

module.exports = (sequelize, Sequelize) => { 
    const UserAuth = sequelize.define("tutorial", {
        _id: {
            type: Sequelize.UUID,
            defaultValue: UUIDV4,
        },
        firstName: {
            type: Sequelize.STRING,
            defaultValue: "",
        },
        
        lastName: {
            type: Sequelize.STRING,
            defaultValue: "",
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
        },
        password: {
            type: Sequelize.STRING,
        },
        token: {
            type: Sequelize.STRING
        },
        
  });

  return UserAuth;
 }