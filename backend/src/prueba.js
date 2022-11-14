//importaciones
const express = require("express");
const Sequelize = require("./config/db");
const bodyParser = require("body-parser");
//configurando el puerto
const {puerto} = require("./config/config");

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

 
 
// verificacion de conexion con la tabla
Sequelize.authenticate()
    .then(() =>{
        console.log("conectado")
    })
    .catch(error =>{
        console.log("el error fue: " + error)
    })


//llamando un modelo para probar la conexion
const cliente = require(`${__dirname}/models/cliente`)(Sequelize)

// creando datos para insertar en la tabla clientes
const clienteNuevo = {
    NOMBRE: "eduardo garcia",
        DIRECCION:"calle laprida 1234",
        NUMERO_CELULAR: "11446677",
        NUMERO_TELEFONO: "33445577",
        EMAIL: "PRUEBA@PRUEBA.COM"
}

 
const clientes = cliente.build(clienteNuevo);
//clientes.save(); 
// haciendo una query de la tabla de prueba
cliente.findAll() 
    .then(datos =>{ 
        var resultados = JSON.stringify(datos)
        console.log(resultados)
    })
    .catch(error =>{
        console.log(error)
    })
 


//--------------------------------------------------base de datos -----------------------------------//
 
 

//una view de prueba
app.get('/', (request, response) =>{
    //response.send(`<h1>hola mundo</h1>`)
    cliente.findAll() 
    .then(datos =>{ 
        var resultados = JSON.stringify(datos)
        console.log(resultados)
        response.json(resultados)
    })
    .catch(error =>{
        console.log(error)
    })
 

    
}); 


app.listen(puerto, () =>{
    console.log(`proceso iniciado en puerto ${puerto}`)  
});

 //---------------------------------------------inicio del server--------------------------------------------
