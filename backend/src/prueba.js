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



//--------------------------------------------------base de datos -----------------------------------//
 
 

app.use("/", (req, res) => {
    res.send("<h1> vista de prueba</h1>")
})

app.use("/posts", require("./routes/post"))


// middleware para usar el contenido de la carpeta "frontend"
app.use(express.static("frontend")) 

app.use("/products", require("./routes/productos"))

app.use("/carrito", require("./routes/compras"))
 //error de sincronizacion de la tabla compras
Sequelize.sync()
.then(() => { console.log("probando")})
.catch(error => console.error('Error sincronizando las tablas', error));

app.listen(PORT, () =>{
    console.log(`proceso iniciado en puerto ${PORT}`)  
});

 //---------------------------------------------inicio del server--------------------------------------------
