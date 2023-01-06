const sequelize = require("../src/config/db");
const producto = require("../src/models/producto")(sequelize);
//ver si hace falta el path para las imagenes
let cosas =[
    {
        NOMBRE_PRODUCTO:"Absorbente Charcoal Bambú",
        DESCRIPCION:"",
        IMAGEN:"absCharcoalBambu.jpg",
        PRECIO_VENTA:1300
    },
    {
        NOMBRE_PRODUCTO:"Absorbente Bambú natural",
        DESCRIPCION:"",
        IMAGEN:"Absorbente Bambu Natural.jpg",
        PRECIO_VENTA:1450
    },{
        NOMBRE_PRODUCTO:"absorbente microfibra",
        DESCRIPCION:"",
        IMAGEN:"Absorbente microfibra.jpg",
        PRECIO_VENTA:600
    },{
        NOMBRE_PRODUCTO:"Almohadilla Terapeutica",
        DESCRIPCION:"",
        IMAGEN:"Almohadilla terapéuticas con semillas y aceites naturales.jpg",
        PRECIO_VENTA:1700
    },{
        NOMBRE_PRODUCTO:"bolsa de lavado",
        DESCRIPCION:"",
        IMAGEN:"Bolsas de lavado.jpg",
        PRECIO_VENTA:400
    },{
        NOMBRE_PRODUCTO:"Copa Menstrual Munay",
        DESCRIPCION:"",
        IMAGEN:"Copa Menstrual Munay_.jpg",
        PRECIO_VENTA:1800
    },{
        NOMBRE_PRODUCTO:"Jabón Arcilla Roja",
        DESCRIPCION:"",
        IMAGEN:"jabón arcilla Roja.jpg",
        PRECIO_VENTA:550
    },{
        NOMBRE_PRODUCTO:"Jabón Arcilla Verde",
        DESCRIPCION:"",
        IMAGEN:"jabón arcilla Verde.jpg",
        PRECIO_VENTA:550
    },{
        NOMBRE_PRODUCTO:"Jabón Carbon Activado",
        DESCRIPCION:"",
        IMAGEN:"jabón carbón activado.jpg",
        PRECIO_VENTA:550
    },{
        NOMBRE_PRODUCTO:"Jabón Textil",
        DESCRIPCION:"",
        IMAGEN:"jabon téxtil.jpg",
        PRECIO_VENTA:550
    },{
        NOMBRE_PRODUCTO:"Jabones Corporales Naturales",
        DESCRIPCION:"",
        IMAGEN:"Jabones Corporales Naturales.jpg",
        PRECIO_VENTA:550
    },{
        NOMBRE_PRODUCTO:"Jabones faciales y corporales Lavanda/Avena",
        DESCRIPCION:"",
        IMAGEN:"Jabones Faciales y Corporales_Lavanda_Avena.jpg",
        PRECIO_VENTA:550
    },{
        NOMBRE_PRODUCTO:"Jabones íntimos Romero/Salvia/Manzanilla",
        DESCRIPCION:"",
        IMAGEN:"Jabones Intimos_Romero_Salvia_Manzanilla_.jpg",
        PRECIO_VENTA:550
    },{
        NOMBRE_PRODUCTO:"Jabones Miel y Romero",
        DESCRIPCION:"",
        IMAGEN:"jabones Miel_Romero.jpg",
        PRECIO_VENTA:550
    },{
        NOMBRE_PRODUCTO:"Kit luna llena",
        DESCRIPCION:"Están realizados con telas hipoalergenicas en contacto con la vulva, tela 100% algodón. Cuentan con capas absorbentes y tela exterior impermeable y respirable. Puedo hacer tu pedido personalizado de acuerdo a tus necesidades.Los estampados podes elegir los vos!",
        IMAGEN:"kit luna llena .jpg",
        PRECIO_VENTA:3100
    },{
        NOMBRE_PRODUCTO:"Kit Menstrual",
        DESCRIPCION:"Están realizados con telas hipoalergenicas en contacto con la vulva, tela 100%algodón. Cuentan con capas absorbentes y tela exterior impermeable y respirable. Puedo hacer tu pedido personalizado de acuerdo a tus necesidades.Los estampados podes elegir los vos!",
        IMAGEN:"kit Menstrual.jpg",
        PRECIO_VENTA:1800
    },{
        NOMBRE_PRODUCTO:"Neceser",
        DESCRIPCION:"",
        IMAGEN:"Neceser(1).jpg",
        PRECIO_VENTA:500
    },{
        NOMBRE_PRODUCTO:"Pack desmaquillante x4",
        DESCRIPCION:"",
        IMAGEN:"Pack Desmaquillante.jpg",
        PRECIO_VENTA:500
    },{
        NOMBRE_PRODUCTO:"Pañales de tela + absorbente microfibra",
        DESCRIPCION:"",
        IMAGEN:"pañales de tela + absorbente microfibra.jpg",
        PRECIO_VENTA:2800
    },{
        NOMBRE_PRODUCTO:"Shampoo Sólido x 75 gr",
        DESCRIPCION:"",
        IMAGEN:"Shampo Sólido_(1).jpg",
        PRECIO_VENTA:950
    }, {
        NOMBRE_PRODUCTO:"Vaso esterilizador",
        DESCRIPCION:"",
        IMAGEN:"vasoesterilizador(1).jpeg",
        PRECIO_VENTA:1500
    },{
        NOMBRE_PRODUCTO:"Jaboneras",
        DESCRIPCION:"",
        IMAGEN:"jabonera.jpeg",
        PRECIO_VENTA:450
    },{
        NOMBRE_PRODUCTO:"Baberos",
        DESCRIPCION:"",
        IMAGEN:"babero-para-bebe.jpg",
        PRECIO_VENTA:400
    },
]


module.exports = cosas