//importaciones
const express = require("express");
const Sequelize = require("./config/db");
const bodyParser = require("body-parser");
const path = require("path");
//configurando el puerto
const {PORT} = require("./config/config");

const app = express();

//middlewares
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

 
 
// verificacion de conexion con la tabla
Sequelize.authenticate()//
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
    NOMBRE: "carla perez",
        DIRECCION:"avenida poxones 1234",
        NUMERO_CELULAR: "11445677",
        NUMERO_TELEFONO: "33445997",
        EMAIL: "PRUEBA@PRUEBA45.COM"
}

 
//const clientes = cliente.build(clienteNuevo);
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

app.use("/posts", require("./routes/post"))


// middleware para usar el contenido de la carpeta "frontend"
app.use(express.static("frontend")) 

app.use("/index", require("./routes/index"))




app.listen(PORT, () =>{
    console.log(`proceso iniciado en puerto ${PORT}`)  
});

 //---------------------------------------------inicio del server--------------------------------------------
