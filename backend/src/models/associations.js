const sequelize = require("../config/db");
const compras = require("./compra")(sequelize);
const productos = require("./producto")(sequelize);
const cliente = require("./cliente")(sequelize);


compras.belongsToMany(productos, {through: "productos_comprados"});
productos.belongsToMany(compras, {through: "productos_comprados"});