'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        unique:true,
        allowNull:false,
        type: Sequelize.STRING,  
      },
      password_hash: {
        type: Sequelize.STRING
      },
      role:{
        allowNull:false, 
        type: Sequelize.Enum("admin", "manager", "developer"),
      },
      status:{
        allowNull:false, 
        type: Sequelize.Enum("active", "archived"),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
   down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};