const express = require("express");
const router = express.Router()

const {producto} = require("../models");

//endpoint de producto en especifico
router.get("/:NOMBRE_PRODUCTO", async(req, res) =>{
    const productos = req.params.NOMBRE_PRODUCTO;
    const Producto = await producto.FindAll({where:{ NOMBRE_PRODUCTO: productos }})
    res.json(Producto);
})

//endpoint de query a todos los productos
router.get("/index", async(req, res) =>{
    const TotalProducto = await producto.FindAll()
    res.json(TotalProducto);
})

module.exports = router;