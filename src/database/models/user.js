'use strict';
module.exports = (sequelize, DataTypes) => 
{
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    nationality: DataTypes.STRING,
    tagline: DataTypes.STRING,
    company: DataTypes.STRING,
    city: DataTypes.STRING,
    token: DataTypes.STRING,
    image:DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Posts,{
      foreign_key:'UserId'
    })
    User.belongsToMany(models.ChatRoom,{
      through:'ChatAsses',
      // as:'chatRooms',
      foreign_key:'chatRoom_id'
    })
    // User.belongsToMany(models.User,{

    // })
    User.belongsToMany(models.User, {
      through: 'UserFollowers',
      foreignKey: 'user_id',
      otherKey:'follower_id',
      as: 'followers',
     
    });
    User.belongsToMany(models.User, {
      through: 'UserFollowers',
      foreignKey: 'follower_id',
      otherKey:'user_id',
      as: 'following'
      
    });
    User.hasMany(models.Message,{
      foreign_key:'from',
      // otherKey:'to',
      foreignKey:'to'
      // as:'from'
    })
    // User.hasMany(models.Message,{
    //   foreign_key:'to',
    //   otherKey:'from',
    //   as:'to'
    // })
  };
  return User;
};