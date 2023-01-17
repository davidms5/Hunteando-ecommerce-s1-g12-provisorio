const {Sequelize} = require("sequelize");

module.exports = (sequelize) => {
    const acercaDe = sequelize.define("acercaDe", {

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
            type: Sequelize.TEXT,
            allowNull: true,
        },

        
    })

    return acercaDe;
}