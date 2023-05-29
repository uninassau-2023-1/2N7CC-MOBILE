const { DataTypes } = require('sequelize');
const conection = require('../../../config/Connection.js');
// Acesso à instância sequelize
async function SenhasGuiches() {
    const SenhaGuiche = conection.sequelize.define('senha_guiche_atendimento', {
        id_senha: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        id_guiche: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'em_atendimento'
        }
      });

      await SenhaGuiche.sync(); // Aguarda a conclusão da sincronização do modelo

      return SenhaGuiche;
}


module.exports = SenhasGuiches;