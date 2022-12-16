const sequelize = require("../config/db");
const compras = require("../models/compra")(sequelize)

const getCompras = async(req, res) =>{
    try {
        const response = await compras.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
const getComprasById = async(req, res) =>{
    try {
        const response = await compras.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
const realizarCompra = async(req, res) =>{
    try {
        await compras.create(req.body);
        res.status(201).json({msg: "compra realizada"});
    } catch (error) {
        console.log(error.message);
    }
}
 
//const actualizarProducto = async(req, res) =>{
//    try {
//        await productos.update(req.body,{
//            where:{
//                ID_PRODUCTO: req.params.ID_PRODUCTO
//            }
//        });
//        res.status(200).json({msg: "producto actualizado"});
//    } catch (error) {
//        console.log(error.message);
//    }
//}
 
const borrarCompra = async(req, res) =>{
    try {
        await compras.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "registro de compra eliminado"});
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {getCompras, getComprasById, realizarCompra, borrarCompra}