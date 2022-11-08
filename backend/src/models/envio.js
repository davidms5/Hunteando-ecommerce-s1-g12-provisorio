const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    ID_ENVIO: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "ID_ENVIO"
    },
    ID_CLIENTE: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ID_CLIENTE",
      references: {
        key: "ID_CLIENTE",
        model: "cliente_model"
      }
    },
    ID_PEDIDO: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ID_PEDIDO",
      references: {
        key: "ID_PEDIDO",
        model: "pedido_model"
      }
    },
    ID_REEMBOLSO: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ID_REEMBOLSO"
    },
    FECHA_ENVIO: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "FECHA_ENVIO"
    },
    TIPO_ENTREGA: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "TIPO_ENTREGA"
    }
  };
  const options = {
    tableName: "envio",
    comment: "",
    indexes: [{
      name: "ID_PEDIDO",
      unique: false,
      type: "BTREE",
      fields: ["ID_PEDIDO"]
    }, {
      name: "ID_CLIENT",
      unique: false,
      type: "BTREE",
      fields: ["ID_CLIENTE"]
    }]
  };
  const EnvioModel = sequelize.define("envio_model", attributes, options);
  return EnvioModel;
};