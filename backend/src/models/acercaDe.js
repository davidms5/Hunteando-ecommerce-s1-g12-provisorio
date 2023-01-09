const {Sequelize} = require("sequelize");

module.exports = (sequelize) => {
    const usuario = sequelize.define("acercaDe", {

        ID:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        TITULO:{
            type: Sequelize.STRING(50),
            allowNull: false,
            
        },

        CONTENIDO:{
            type: Sequelize.MEDIUMTEXT,
            allowNull: true,
        },

        
    })
}