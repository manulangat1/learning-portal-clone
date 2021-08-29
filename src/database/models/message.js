'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    message: DataTypes.STRING
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
    Message.belongsTo(models.User,{
      foreignKey:'from',
      otherKey:'to'
    })
    Message.belongsTo(models.User,{
      foreignKey:'to',
      otherKey:'from'
    })
  };
  return Message;
};