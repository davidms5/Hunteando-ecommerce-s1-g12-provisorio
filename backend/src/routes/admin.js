const bcrypt = require('bcrypt');
const sequelize = require('../config/db');
const usuario = require("../models/usuario")(sequelize);

const express = require("express");
const router = express.Router();

router.post("/admin/user", (req, res) =>{

    const {password} = req.body;
    
    bcrypt.genSalt(10, (err, salt) =>{

        bcrypt.hash(password, salt, (err, hash) =>{

            const user = {
                USUARIO_NOMBRE: req.body.USUARIO_NOMBRE,
                PASSWORD: hash
            };

            usuario.create(user)
            .then(() => res.sendStatus(201))
            .catch(error => res.status(400).send(error))
        })
    })
})

router.get("/admin", (req, res) =>{

    const {USUARIO_NOMBRE} = req.params;
    const {PASSWORD}= req.query;

    usuario.findOne( {where: {USUARIO_NOMBRE}})
    .then(user => {

        bcrypt.compare(PASSWORD, user.PASSWORD, (err, result) =>{
            if (result){
                res.status(200)
            } else {
                res.status(400).send("contraseña no valida")
            }
        })
    })
    .catch(error =>{
        console.log(error)
    })
})


module.exports = router;
