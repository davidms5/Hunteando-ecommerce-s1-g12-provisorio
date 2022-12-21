const { Sequelize } = require('sequelize');

module.exports = (sequelize) => {
  const productos_comprados = sequelize.define('productos_comprados', {
    
    
    CANTIDAD: {
        type: Sequelize.INTEGER(50),
        allowNull: false
    },
   // PRECIO: {
   //     type: Sequelize.DECIMAL,
   //     allowNull: false
   // }, 
  });

  return productos_comprados;
};


