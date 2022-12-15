const express = require("express");
const router = express.Router();
const sequelize = require("../config/db")

const ProductoModel = require("../models/producto")(sequelize);

const {addProductos} = require("../controllers/productos.controllers");


//endpoint de producto en especifico
router.get("/:ID_PRODUCTO", (req, res) =>{
    const productos = req.params.ID_PRODUCTO;

    ProductoModel.findAll({where:{ ID_PRODUCTO: productos }}) 
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
        // res.json([{\"NOMBRE_PRODUCTO\":\"cosas\",\"IMAGEN\":\"prod1.jpg\",\"PRECIO_VENTA\":5000,\"MARCA\":\"sexas\"},{\"NOMBRE_PRODUCTO\":\"cosas\",\"IMAGEN\":\"prod2.jpg\",\"PRECIO_VENTA\":45000,\"MARCA\":\"sexasasdd\"},{\"NOMBRE_PRODUCTO\":\"arroz\",\"IMAGEN\":\"prod2.jpg\",\"PRECIO_VENTA\":1500,\"MARCA\":\"pan\"}])
    })
    .catch(error =>{
        console.log(error)
    })
   // const TotalProducto = await ProductoModel.FindAll()
   // res.json(TotalProducto);

   
})

router.post("/add_product", addProductos)

module.exports = router;