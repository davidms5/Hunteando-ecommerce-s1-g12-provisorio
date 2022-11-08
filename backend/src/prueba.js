//importaciones
const express = require("express");
const Sequelize = require("sequelize");
const bodyParser = require("body-parser");


const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//configurando el puerto
const puerto = process.env.port || 3000
 
 //conexion a la base de datos
const baseDeDatos = new Sequelize('prueba2', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    define: {timestamps:false}

}); 

// verificacion de conexion con la tabla
baseDeDatos.authenticate()
    .then(() =>{
        console.log("conectado")
    })
    .catch(error =>{
        console.log("el error fue: " + error)
    })


//llamando un modelo para probar la conexion
const cliente = require(`${__dirname}/models/cliente`)(baseDeDatos)

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
    response.send(`<h1>hola mundo</h1>`)
    
}); 


app.listen(puerto, () =>{
    console.log(`proceso iniciado en puerto ${puerto}`)  
});

 //---------------------------------------------inicio del server--------------------------------------------
