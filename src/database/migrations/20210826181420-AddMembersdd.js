'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return Promise.all([
    queryInterface.removeColumn('ChatAsses','chatRoomIds'),
    queryInterface.removeColumn('ChatAsses','userId')
   ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
      return Promise.all([
        queryInterface.addColumn('ChatAsses','chatRoomIds',{type:Sequelize.STRING}),
        queryInterface.addColumn('ChatAsses','userId',{type:Sequelize.STRING})
       ])
  }
};
