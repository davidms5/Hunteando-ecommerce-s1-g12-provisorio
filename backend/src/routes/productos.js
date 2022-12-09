const express = require("express");
const router = express.Router();
const sequelize = require("../config/db")

const ProductoModel = require("../models/producto")(sequelize);


//endpoint de producto en especifico
router.get("/:NOMBRE_PRODUCTO", (req, res) =>{
    const productos = req.params.NOMBRE_PRODUCTO;

    ProductoModel.findAll({where:{ NOMBRE_PRODUCTO: productos }}) 
    .then(datos =>{ 
        var resultados = JSON.stringify(datos)
        console.log(resultados) 
        res.json(resultados)
    })
    .catch(error =>{
        console.log(error)
    })
    //const productos = req.params.NOMBRE_PRODUCTO;
    //const Producto = await ProductoModel.FindAll({where:{ NOMBRE_PRODUCTO: productos }})
    //res.json(Producto);
})

//endpoint de query a todos los productos
router.get("/", async(req, res) =>{
    
    ProductoModel.findAll({attributes:["NOMBRE_PRODUCTO", "IMAGEN", "PRECIO_VENTA", "MARCA"]}) 
    .then(datos =>{ 
        var resultados = JSON.stringify(datos)
        console.log(resultados) 
        res.json(resultados)
    })
    .catch(error =>{
        console.log(error)
    })
   // const TotalProducto = await ProductoModel.FindAll()
   // res.json(TotalProducto);
})

module.exports = router;