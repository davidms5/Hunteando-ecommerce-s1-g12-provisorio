const sequelize = require('../config/db');
const compras = require('../models/compra')(sequelize);
const producto = require('../models/producto')(sequelize);

const getCompras = async (req, res) => {
  try {
    const response = await compras.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const getComprasById = async (req, res) => {
  try {
    const response = await compras.findOne({
      where: {
        ID: req.params.ID,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const realizarCompra = async (req, res) => {
  console.log(req.body);
  try {
    const { ID } = await compras.create(req.body);

    // await compras.setproducto(req.body.PRODUCTO); ó usar bulkcreate para aceptar la insercion de varios productos
    //en el include de la tabla join de productos_comprados. Ver si lo que manda el front es un array de compras, si es asi
    //hacer preubas del front back, si funciona entonces proceder a pensar si se puede poner como el fluxter

    res.status(201).json({ ID, msg: 'compra realizada' });
  } catch (error) {
    console.log(error.message);
  }
};


       

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

const borrarCompra = async (req, res) => {
  try {
    await compras.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: 'registro de compra eliminado' });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getCompras, getComprasById, realizarCompra, borrarCompra };
