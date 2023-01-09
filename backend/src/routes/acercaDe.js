const express = require("express");
const router = express.Router();

const {
    getAcercaDe,
    actualizarAcercaDe, 
    borrarAcercaDe,
    crearAcercaDe
} = require("../controllers/acercaDe.controllers");

    

//endpoint de query del acerca de
router.get("/about", getAcercaDe);
 
//crear productos
router.post("/admin/NuevoAbout", crearAcercaDe);

//actualizar producto
router.patch("admin/about/:TITULO", actualizarAcercaDe);

// borrar producto
router.delete("admin/about/:TITULO", borrarAcercaDe);

module.exports = router;