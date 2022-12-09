const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    ID_PRODUCTO: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "ID_PRODUCTO"
    },
    NOMBRE_PRODUCTO: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "NOMBRE_PRODUCTO"
    },
    CATEGORIA: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "CATEGORIA"
    },
    CANTIDAD: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "CANTIDAD"
    },
    IMAGEN: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "IMAGEN"
    },
    EXISTENCIA: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "EXISTENCIA"
    },
    PRECIO_VENTA: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PRECIO_VENTA"
    },
    MARCA: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "MARCA"
    },
    PROMOCION: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PROMOCION"
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