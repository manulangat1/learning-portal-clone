'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ChatAsses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      chatRoomId:{
        type: Sequelize.INTEGER,
        onDelete: 'set null',
        allowNull: false,
        references: {
          model: 'ChatRooms',
          key: 'id',
        }
      },
      userId:{
        type: Sequelize.INTEGER,
        onDelete: 'set null',
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        }
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ChatAsses');
  }
};