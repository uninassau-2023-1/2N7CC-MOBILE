'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Atendimentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      senha: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      tipoSenha: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.DATE
      },
      isFoiChamada: {
        type: Sequelize.BOOLEAN
      },
      guiche:{
        type: Sequelize.STRING
      },
      hora:{
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Atendimentos');
  }
};