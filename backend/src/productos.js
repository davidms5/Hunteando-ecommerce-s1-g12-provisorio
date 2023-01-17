const sequelize = require("./config/db");
const producto = require("./models/producto")(sequelize);
//ver si hace falta el path para las imagenes
let cosas =[
    {
        NOMBRE_PRODUCTO:"Absorbente Charcoal Bambú",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/absCharcoalBambu.jpg`,
        PRECIO_VENTA:1300
    },
    {
        NOMBRE_PRODUCTO:"Absorbente Bambú natural",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/Absorbente Bambu Natural.jpg`,
        PRECIO_VENTA:1450
    },{
        NOMBRE_PRODUCTO:"absorbente microfibra",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/Absorbente microfibra.jpg`,
        PRECIO_VENTA:600
    },{
        NOMBRE_PRODUCTO:"Almohadilla Terapeutica",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/Almohadilla terapéuticas con semillas y aceites naturales.jpg`,
        PRECIO_VENTA:1700
    },{
        NOMBRE_PRODUCTO:"bolsa de lavado",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/Bolsas de lavado.jpg`,
        PRECIO_VENTA:400
    },{
        NOMBRE_PRODUCTO:"Copa Menstrual Munay",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/Copa Menstrual Munay_.jpg`,
        PRECIO_VENTA:1800
    },{
        NOMBRE_PRODUCTO:"Jabón Arcilla Roja",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/jabón arcilla Roja.jpg`,
        PRECIO_VENTA:550
    },{
        NOMBRE_PRODUCTO:"Jabón Arcilla Verde",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/jabón arcilla Verde.jpg`,
        PRECIO_VENTA:550
    },{
        NOMBRE_PRODUCTO:"Jabón Carbon Activado",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/jabón carbón activado.jpg`,
        PRECIO_VENTA:550
    },{
        NOMBRE_PRODUCTO:"Jabón Textil",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/jabon téxtil.jpg`,
        PRECIO_VENTA:550
    },{
        NOMBRE_PRODUCTO:"Jabones Corporales Naturales",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/Jabones Corporales Naturales.jpg`,
        PRECIO_VENTA:550
    },{
        NOMBRE_PRODUCTO:"Jabones faciales y corporales Lavanda/Avena",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/Jabones Faciales y Corporales_Lavanda_Avena.jpg`,
        PRECIO_VENTA:550
    },{
        NOMBRE_PRODUCTO:"Jabones íntimos Romero/Salvia/Manzanilla",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/Jabones Intimos_Romero_Salvia_Manzanilla_.jpg`,
        PRECIO_VENTA:550
    },{
        NOMBRE_PRODUCTO:"Jabones Miel y Romero",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/jabones Miel_Romero.jpg`,
        PRECIO_VENTA:550
    },{
        NOMBRE_PRODUCTO:"Kit luna llena",
        DESCRIPCION:"Están realizados con telas hipoalergenicas en contacto con la vulva, tela 100% algodón. Cuentan con capas absorbentes y tela exterior impermeable y respirable. Puedo hacer tu pedido personalizado de acuerdo a tus necesidades.Los estampados podes elegir los vos!",
        IMAGEN:`${__dirname}/imagenes/kit luna llena .jpg`,
        PRECIO_VENTA:3100
    },{
        NOMBRE_PRODUCTO:"Kit Menstrual",
        DESCRIPCION:"Están realizados con telas hipoalergenicas en contacto con la vulva, tela 100%algodón. Cuentan con capas absorbentes y tela exterior impermeable y respirable. Puedo hacer tu pedido personalizado de acuerdo a tus necesidades.Los estampados podes elegir los vos!",
        IMAGEN:`${__dirname}/imagenes/kit Menstrual.jpg`,
        PRECIO_VENTA:1800
    },{
        NOMBRE_PRODUCTO:"Neceser",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/Neceser(1).jpg`,
        PRECIO_VENTA:500
    },{
        NOMBRE_PRODUCTO:"Pack desmaquillante x4",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/Pack Desmaquillante.jpg`,
        PRECIO_VENTA:500
    },{
        NOMBRE_PRODUCTO:"Pañales de tela + absorbente microfibra",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/pañales de tela + absorbente microfibra.jpg`,
        PRECIO_VENTA:2800
    },{
        NOMBRE_PRODUCTO:"Shampoo Sólido x 75 gr",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/Shampo Sólido_(1).jpg`,
        PRECIO_VENTA:950
    }, {
        NOMBRE_PRODUCTO:"Vaso esterilizador",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/vasoesterilizador(1).jpeg`,
        PRECIO_VENTA:1500
    },{
        NOMBRE_PRODUCTO:"Jaboneras",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/jabonera.jpeg`,
        PRECIO_VENTA:450
    },{
        NOMBRE_PRODUCTO:"Baberos",
        DESCRIPCION:"",
        IMAGEN:`${__dirname}/imagenes/babero-para-bebe.jpg`,
        PRECIO_VENTA:400
    },
]


module.exports = cosas