'use strict';
module.exports = (sequelize, DataTypes) => {
  const Followers = sequelize.define('Followers', {
    name: DataTypes.STRING
  }, {});
  Followers.associate = function(models) {
    // associations can be defined here
    Followers.belongsTo(models.User,{
      foreignKey:'followersId'
    })
  };
  return Followers;
};