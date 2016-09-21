'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    isAdmin:{type: DataTypes.BOOLEAN, defaultValue: false},
    email: DataTypes.STRING,
    password: DataTypes.STRING

  }, {
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        user.belongsToMany(models.roles,{
          through: 'userRole',
          constraints: false,
          OnDelete: 'CASCADE',
          OnUpdate: 'CASCADE'
        }),
        user.belongsToMany(models.appointment,{
          through: 'appointmentUser',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          constraints: false
        })
      }
    }
  });
  return user;
};