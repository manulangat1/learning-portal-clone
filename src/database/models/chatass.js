'use strict';
module.exports = (sequelize, DataTypes) => {
  const ChatAss = sequelize.define('ChatAss', {
  }, {});
  ChatAss.associate = function(models) {
    // associations can be defined here
  };
  return ChatAss;
};