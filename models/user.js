'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        user.belongsToMany(models.roles,{
          through: 'userRole',
          constraints: false,
          OnDelete: 'CASCADE',
          OnUpdate: 'CASCADE'
        })
      }
    }
  });
  return user;
};