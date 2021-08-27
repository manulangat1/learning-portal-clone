'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserFollowers = sequelize.define('UserFollowers', {
    name: DataTypes.STRING
  }, {});
  UserFollowers.associate = function(models) {
    // associations can be defined here
  };
  return UserFollowers;
};