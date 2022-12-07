const config =require("../config/db")
const sequelize = require("sequelize")

const database = {}

database.sequelize =sequelize;
database.config = config;

database.producto = require("../models/producto")(config, sequelize);

module.exports = database;