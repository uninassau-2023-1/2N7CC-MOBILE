const { DataTypes } = require('sequelize');
const conection = require('../../../config/Connection.js');
// Acesso à instância sequelize
async function Senhas() {
    const Senha = conection.sequelize.define('gerador_senha', {
        senha: {
          type: DataTypes.STRING,
          allowNull: false
        },
        tipo_atendimento: {
          type: DataTypes.STRING,
          allowNull: false
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: 'disponivel'
        },
      });

      await Senha.sync(); // Aguarda a conclusão da sincronização do modelo

      return Senha;
}


module.exports = Senhas;