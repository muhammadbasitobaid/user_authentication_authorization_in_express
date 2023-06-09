const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
}); 
const testDbConnection = async() => { 
try {
    await sequelize.authenticate();
    console.log('Database is Successfully connected');
} catch (error) {
    
}
 }
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.testDbConnection = testDbConnection;
db.UserAuth = require('./userAuth.model')(sequelize, Sequelize);

module.exports = db;