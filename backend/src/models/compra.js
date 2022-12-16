const { Sequelize } = require('sequelize');

module.exports = (sequelize) => {
  const compras = sequelize.define('compras', {
    id: {
      type: Sequelize.UUID(20),
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    Nombre: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    Apellido: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    Email: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    ProductoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'producto',
            key: 'ID_PRODUCTO'
        }
    },
    cantidad: {
        type: Sequelize.INTEGER(50),
        allowNull: false
    },
    precioTotal: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }, 
    fechaDeCompra:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    medioDePago: {
        type: Sequelize.STRING,
        allowNull: false // modificar este campo para que acepte medios de pago en especifico
    }
  });

  return compras;
};


