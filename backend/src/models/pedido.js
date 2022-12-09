const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    ID_PEDIDO: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "ID_PEDIDO"
    },
    CODIGO_COMPROBANTE: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "CODIGO_COMPROBANTE"
    },
    ID_CLIENTE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ID_CLIENTE"
    },
    ID_DETALLE_PEDIDO: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ID_DETALLE_PEDIDO"
    },
    ID_PRODUCTO: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ID_PRODUCTO",
      references: {
        key: "ID_PRODUCTO",
        model: "producto_model"
      }
    },
    FECHA: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "FECHA"
    },
    PAGO_PEDIDO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PAGO_PEDIDO"
    },
    ID_PAGO_PEDIDO: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ID_PAGO_PEDIDO"
    },
    ESTADO_PEDIDO: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ESTADO_PEDIDO"
    }
  };
  const options = {
    tableName: "pedido",
    comment: "",
    indexes: [{
      name: "ID_PRODUCTO",
      unique: false,
      type: "BTREE",
      fields: ["ID_PRODUCTO"]
    }]
  };
  const PedidoModel = sequelize.define("pedido_model", attributes, options);
  return PedidoModel;
};