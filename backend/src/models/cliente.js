const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    ID_CLIENTE: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "ID_CLIENTE"
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "NOMBRE"
    },
    DIRECCION: {
      type: DataTypes.STRING(50),
      
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "DIRECCION"
    },
    NUMERO_CELULAR: {
      type: DataTypes.STRING(45),
      
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "NUMERO_CELULAR"
    },
    NUMERO_TELEFONO: {
      type: DataTypes.STRING(45),
      
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "NUMERO_TELEFONO"
    },
    EMAIL: {
      type: DataTypes.STRING(50),
     
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "EMAIL"
    }
  };
  const options = {
    tableName: "cliente",
    comment: "",
    indexes: []
  };
  const ClienteModel = sequelize.define("cliente_model", attributes, options);
  return ClienteModel;
};