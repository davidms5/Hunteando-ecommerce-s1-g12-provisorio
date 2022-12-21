const { Sequelize } = require('sequelize');

module.exports = (sequelize) => {
  const compras = sequelize.define('compras', {
    ID: {
      type: Sequelize.UUID(20),
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    NOMBRE: {
      type: Sequelize.STRING(50),
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: "no puede haber strings vacios",
        },
        len:{
          args:[3, 255],
          msg: "el valor tiene que estar entre 3 a 255 caracteres"
        }  // no permite que se acepten strings vacios
      }
    },
    APELLIDO: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    EMAIL: {
      type: Sequelize.STRING(50), //buscar un validate para el email
      allowNull: false,
      validate:{
        isEmail:{
          args:true,
          msg:"tiene que ser un email valido"
        }
      }
    },
    PRODUCTO: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'producto',
            key: 'ID_PRODUCTO'
        }
    }, // que producto_id, cantidad y precio esten en otra tabla, y precio total seria la suma de los precios de cada
       // que esa tabla sea de una tabla compra, pero que la tabla compra tenga multiples tablas de esa otra tabla
       // ver cual asociacion funciona, one to many o many to many
    CANTIDAD: {
        type: Sequelize.INTEGER(50),
        allowNull: false
    },
    PRECIO_TOTAL: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }, 
    FECHA_DE_COMPRA:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    //MEDIO_DE_PAGO: {
    //    type: Sequelize.STRING,
    //    allowNull: false // modificar este campo para que acepte medios de pago en especifico
    //}
  });

  return compras;
};


