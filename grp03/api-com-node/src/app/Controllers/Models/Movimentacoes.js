const { DataTypes } = require('sequelize');
const conection = require('../../../config/Connection.js');
// Acesso à instância sequelize
async function Movimentacoes() {
    const Movimentacao = conection.sequelize.define('movimentacao', {
        numero_guiche: {
          type: DataTypes.STRING,
          allowNull: false
        },
        numero_senha: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
          } 
      });

      await Movimentacao.sync(); // Aguarda a conclusão da sincronização do modelo

      return Movimentacao;
}


module.exports = Movimentacoes;