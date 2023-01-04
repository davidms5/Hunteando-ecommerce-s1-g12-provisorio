const { Sequelize } = require('sequelize');

module.exports = (sequelize) => {
  const productos_comprados = sequelize.define('productos_comprados', {


    ID:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    NOMBRE_PRODUCTO: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    
    CANTIDAD: {
        type: Sequelize.INTEGER(50),
        allowNull: false
    },
    PRECIO: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }, 
  });

  return productos_comprados;
};


