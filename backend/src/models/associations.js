const sequelize = require("../config/db");
const compras = require("./compra")(sequelize);
const productos = require("./producto")(sequelize);
const cliente = require("./cliente")(sequelize);
const productos_comprados= require("./productos_comprados")(sequelize);


compras.belongsToMany(productos, {through: productos_comprados});
productos.belongsToMany(compras, {through: productos_comprados, foreignKey: 'PRODUCTO_ID'});