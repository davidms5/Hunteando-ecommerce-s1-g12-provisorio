const express = require("express");
const Sequelize = require("../config/db");
const path = require("path");
const producto = require(`../models/producto`)(Sequelize)
//const router = express.Router()

const inicio = express.Router();


inicio.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../../../frontend/index.html'))
  
})

let productos = []
//ver como retornar el valor al front
  producto.findAll({
    attributes: ['NOMBRE_PRODUCTO','PRECIO_VENTA', 'IMAGEN','ID_PRODUCTO'],
}).then(valor =>{
    valor.map(({dataValues}) => {
        
        const cosas = {
            title: dataValues["NOMBRE_PRODUCTO"],
            price: dataValues["PRECIO_VENTA"],
            img: dataValues["IMAGEN"],
            id: dataValues["ID_PRODUCTO"]
        }
        console.log(cosas)
        //console.log(dataValues["NOMBRE_PRODUCTO"])
        productos.push(cosas)})
    
    
})

module.exports = inicio;
module.exports = producto;

//desde aqui hacer el endpoint de la base de datos al front

 