exports.addProductos = (req, res) => {

    const producto = {
        nombre: req.body.NOMBRE_PRODUCTO,
        categoria: req.body.CATEGORIA,
        cantidad: req.body.CANTIDAD,
        imagen: req.body.IMAGEN,
        existencia: req.body.EXISTENCIA,
        precio_venta: req.body.PRECIO_VENTA,
        marca: req.body.MARCA,
        promocion: req.body.PROMOCION,
        descuento: req.body.DESCUENTO,
    }

    productoModel.create(producto)

}