const { DataTypes } = require('sequelize');
const conection = require('../../../config/Connection.js');
// Acesso à instância sequelize
async function modeloUser() {
    const User = conection.sequelize.define('User', {
        nome: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        senha: {
          type: DataTypes.STRING,
          allowNull: false
        },
        telefone: {
          type: DataTypes.STRING,
          allowNull: false
        }
      });

      await User.sync(); // Aguarda a conclusão da sincronização do modelo

      return User;
}


module.exports = modeloUser;