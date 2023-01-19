const sequelize = require("../config/db");
const productos = require("../models/producto")(sequelize)
const multer = require('multer')
const path =require("path")
const fs = require('fs')


//const diskstorage = multer.diskStorage({
//    destination: path.join(__dirname, "../imagenes"),
//    filename: function(req, file, cb){
//        cb(null, Date.now() + '-' + file.originalname)
//    }
//})

//const upload = multer({
//   
//    storage: diskstorage
//}).single('image') //preguntar a front que nombre recibiria la image

const getproductos = async(req, res) =>{
    try {
        //let respuesta =[]
       // const {IMAGEN_DATA} = await productos.findAll();
        const response = await productos.findAll();
        //if (response.IMAGEN === (path.join(__dirname, `../imagenes/${response.IMAGEN}`))){
        //    res.status(200).json(response);
        //}
        //response.map( item =>{
        //   fs.writeFileSync(path.join(__dirname, '../dbImagenes' + item.IMAGEN + '.jpg'), item.IMAGEN_DATA ) 
        //   const imageDir = fs.readFileSync(path.join(__dirname, '../dbImagenes' + item.IMAGEN + '.jpg'))
        //   
        //   respuesta.push({
        //    ID_PRODUCTO: item.ID_PRODUCTO, 
        //    NOMBRE_PRODUCTO: item.NOMBRE_PRODUCTO,
        //    DESCRIPCION: item.DESCRIPCION,
        //    IMAGEN: imageDir,
        //    PRECIO_VENTA: item.PRECIO_VENTA, 
        //    DESCUENTO: item.DESCUENTO
        //   })
        //
        //})
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
 
const crearProducto =  async(req, res) =>{//prueba
    try {
       //const imagen_data = fs.readFileSync(path.join(__dirname, '../imagenes' + req.file.filename))

        await productos.create({
            NOMBRE_PRODUCTO: req.body.NOMBRE_PRODUCTO,
            DESCRIPCION: req.body.DESCRIPCION,
            PRECIO_VENTA: req.body.PRECIO_VENTA,
            IMAGEN: req.body.IMAGEN,
            //IMAGEN_DATA: imagen_data
        });
        res.status(201).json({msg: "producto creado"});
    } catch (error) {
        console.log(error.message);
    }
}
 
const actualizarProducto = async(req, res) =>{
    try {
        await productos.update(
            {NOMBRE_PRODUCTO:req.body.NOMBRE_PRODUCTO,
            DESCRIPCION:req.body.DESCRIPCION,
            IMAGEN: req.body.IMAGEN,
            PRECIO_VENTA:req.body.PRECIO_VENTA,
            DESCUENTO:req.body.DESCUENTO},
            {
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
