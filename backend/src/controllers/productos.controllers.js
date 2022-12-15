const sequelize = require("../config/db");
const productos = require("../models/producto")(sequelize)

const getproductos = async(req, res) =>{
    try {
        const response = await productos.findAll({attributes:["NOMBRE_PRODUCTO", "IMAGEN", "PRECIO_VENTA", "MARCA"]});
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
const getProductosById = async(req, res) =>{
    try {
        const response = await productos.findOne({
            where:{
                ID_PRODUCTO: req.params.ID_PRODUCTO
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
const crearProducto = async(req, res) =>{
    try {
        await productos.create(req.body);
        res.status(201).json({msg: "producto creado"});
    } catch (error) {
        console.log(error.message);
    }
}
 
const actualizarProducto = async(req, res) =>{
    try {
        await productos.update(req.body,{
            where:{
                ID_PRODUCTO: req.params.ID_PRODUCTO
            }
        });
        res.status(200).json({msg: "producto actualizado"});
    } catch (error) {
        console.log(error.message);
    }
}
 
const borrarProducto = async(req, res) =>{
    try {
        await productos.destroy({
            where:{
                ID_PRODUCTO: req.params.ID_PRODUCTO
            }
        });
        res.status(200).json({msg: "producto eliminado"});
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {getproductos, getProductosById, crearProducto, actualizarProducto, borrarProducto}






//exports.addProductos = (req, res) => {
//
//    const producto = {
//        nombre: req.body.NOMBRE_PRODUCTO,
//        categoria: req.body.CATEGORIA,
//        cantidad: req.body.CANTIDAD,
//        imagen: req.body.IMAGEN,
//        existencia: req.body.EXISTENCIA,
//        precio_venta: req.body.PRECIO_VENTA,
//        marca: req.body.MARCA,
//        promocion: req.body.PROMOCION,
//        descuento: req.body.DESCUENTO,
//    }
//
//    productoModel.create(producto)
//
//}