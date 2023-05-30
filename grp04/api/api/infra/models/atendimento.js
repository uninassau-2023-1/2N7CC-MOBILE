'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atendimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Atendimento.init({
    senha: DataTypes.INTEGER,
    tipoSenha: DataTypes.STRING,
    data: DataTypes.DATE,
    isFoiChamada: DataTypes.BOOLEAN,
    guiche: DataTypes.STRING,
    hora: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Atendimento',
  });
  return Atendimento;
};