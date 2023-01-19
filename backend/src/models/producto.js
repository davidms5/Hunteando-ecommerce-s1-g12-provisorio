const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    ID_PRODUCTO: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "ID_PRODUCTO"
    },
    NOMBRE_PRODUCTO: {
      type: DataTypes.STRING(100),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "NOMBRE_PRODUCTO"
    },
    DESCRIPCION: {
      type: DataTypes.STRING(100),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "DESCRIPCION"
    },
    
    IMAGEN: {
      type: DataTypes.STRING(100),
    
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "IMAGEN"
    },

    //IMAGEN_DATA:{
    //  type: DataTypes.BLOB('long'),
    //  primaryKey: false,
    //  autoIncrement: false,
    //  field: "IMAGEN_DATA"
    //},
   
    
    PRECIO_VENTA: {
      type: DataTypes.INTEGER(11),
      
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PRECIO_VENTA"
    },
    
    DESCUENTO: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "DESCUENTO"
    }
  };
  const options = {
    tableName: "producto",
    comment: "",
    indexes: []
  };
  const ProductoModel = sequelize.define("producto_model", attributes, options);
  return ProductoModel;
};