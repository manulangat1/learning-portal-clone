'use strict';
module.exports = (sequelize, DataTypes) => {
  const ChatAsses = sequelize.define('ChatAsses', {
    name: DataTypes.STRING
  }, {});
  ChatAsses.associate = function(models) {
    // associations can be defined here
  };
  return ChatAsses;
};