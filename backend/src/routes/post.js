const express = require("express");
const router =express.Router();
const sequelize = require("../config/db");
const Cliente = require("../models/cliente")(sequelize);


router.get("/", (req, res) =>{
    res.send("hola otra vez");
})

//create
//router.post("/", (req, res) =>{
//    comic.create({
//        titulo: req.body.titulo,
//        editorial: req.body.editorial
//    }).then(post => {
//        res.json(post)
//    })
//})
//read
router.get("/:id", (req, res) =>{
    Cliente.findByPk(req.params.id).then(post=>{
        res.json(post);
    })
})
//update
router.patch("/:id", (req, res) => {
    Cliente.update({
        DIRECCION:req.params.DIRECCION
    }, {
        where :{
            ID_CLIENTE: id.params.ID_CLIENTE
        }
    }).then(resultado =>{
        res.json(resultado);
    })
})
//delete
//router.delete("/:id", (req, res) => {})
module.exports = router;