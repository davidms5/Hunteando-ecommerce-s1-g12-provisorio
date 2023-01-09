const {Sequelize} = require("sequelize");

module.exports = (sequelize) => {
    const usuario = sequelize.define("usuario", {

        ID:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        USUARIO_NOMBRE:{
            type: Sequelize.STRING(50),
            allowNull: false,
            validate:{
                notEmpty:{
                    args: true,
                    msg: "no puede estar vacio"
                },
                len:{
                    args:[3, 255],
                    msg: "el valor tiene que estar entre 3 a 255 caracteres"
                }
            }
        },

        PASSWORD:{
            type: Sequelize.STRING(50),
            allowNull: false
        },

        
    });

    return usuario;
}