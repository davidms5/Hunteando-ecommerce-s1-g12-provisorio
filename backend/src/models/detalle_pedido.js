const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    ID_DETALLE_PEDIDO: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "ID_DETALLE_PEDIDO"
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
    PRECIO_UNITARIO: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PRECIO_UNITARIO"
    },
    PRECIO_POR_MAYOR: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PRECIO_POR_MAYOR"
    },
    PRECIO_TOTAL: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PRECIO_TOTAL"
    }
  };
  const options = {
    tableName: "detalle_pedido",
    comment: "",
    indexes: []
  };
  const DetallePedidoModel = sequelize.define("detalle_pedido_model", attributes, options);
  return DetallePedidoModel;
};