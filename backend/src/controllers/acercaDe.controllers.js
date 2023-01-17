const sequelize = require("../config/db");

const acercaDe = require("../models/acercaDe")(sequelize);

const getAcercaDe =async(req, res) =>{
    try {
        const response = await acercaDe.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

const crearAcercaDe = async(req, res) =>{
    try {
        await acercaDe.create(req.body);
        res.status(201).json({msg: "nueva presnetacion"});
    } catch (error) {
        console.log(error.message);
    }
}
 
const actualizarAcercaDe = async(req, res) =>{
    try {
        await acercaDe.update(req.body,{
            where:{
                TITULO: req.params.TITULO
            }
        });
        res.status(200).json({msg: "acerca de actualizado"});
    } catch (error) {
        console.log(error.message);
    }
}
 
const borrarAcercaDe = async(req, res) =>{
    try {
        await acercaDe.destroy({
            where:{
                TITULO: req.params.TITULO
            }
        });
        res.status(200).json({msg: "acerca de eliminado"});
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {getAcercaDe, actualizarAcercaDe, borrarAcercaDe, crearAcercaDe}