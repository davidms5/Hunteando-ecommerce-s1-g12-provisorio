const express = require("express");
const Sequelize = require("../config/db");
const path = require("path");
//const router = express.Router()

const inicio = express();


inicio.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, '../../../frontend/index.html'))
})

module.exports = inicio;

//desde aqui hacer el endpoint de la base de datos al front

 