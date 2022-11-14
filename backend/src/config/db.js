const Sequelize = require("sequelize");
const baseDeDatos = require("./config");

const sequelize = new Sequelize(
    baseDeDatos.database,
    baseDeDatos.user,
    baseDeDatos.password, {
        host: baseDeDatos.host,
        dialect:"mysql",
        define: {timestamps:false}

    }
);

module.exports = sequelize;