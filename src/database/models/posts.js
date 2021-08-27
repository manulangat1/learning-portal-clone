'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Posts.associate = function(models) {
    // associations can be defined here
    Posts.belongsTo(models.User,{
      foreignKey:'authorId'
    })
  };
  return Posts;
};