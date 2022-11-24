const express = require("express");
const Sequelize = require("../config/db");
const path = require("path");
const productos = require(`../models/producto`)(Sequelize)
//const router = express.Router()

const inicio = express.Router();


inicio.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../../../frontend/index.html'))
})

productos.findAll({
    attributes: ['NOMBRE_PRODUCTO','PRECIO_VENTA', 'IMAGEN','ID_PRODUCTO'],
}).then(valor =>{
    return (valor);
})

module.exports = {inicio, productos};

//desde aqui hacer el endpoint de la base de datos al front

 