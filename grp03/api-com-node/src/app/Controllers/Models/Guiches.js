const { DataTypes } = require('sequelize');
const conection = require('../../../config/Connection.js');
// Acesso à instância sequelize
async function Guiches() {
    const Guiche = conection.sequelize.define('guiche', {
        numero_guiche: {
          type: DataTypes.STRING,
          allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'disponivel'
          }
      });

      await Guiche.sync(); // Aguarda a conclusão da sincronização do modelo

      return Guiche;
}


module.exports = Guiches;