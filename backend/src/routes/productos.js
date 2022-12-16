const express = require("express");
const router = express.Router();




const {
    getproductos,
    getProductosById,
    actualizarProducto,
    crearProducto, 
    borrarProducto  } = require("../controllers/productos.controllers");


//endpoint de producto en especifico
router.get("/:ID_PRODUCTO", getProductosById);
    

//endpoint de query a todos los productos
router.get("/", getproductos);
 
//crear productos
router.post("/", crearProducto);

//actualizar producto
router.patch("/:ID_PRODUCTO", actualizarProducto);

// borrar producto
router.delete("/:ID_PRODUCTO", borrarProducto);

module.exports = router;