'use strict';
module.exports = function(sequelize, DataTypes) {
  var roles = sequelize.define('roles', {
    name: DataTypes.STRING
  }, {
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        roles.belongsToMany(models.user,{
          through: 'userRole',
          onDelete:'CASCADE',
          onUpdate:'CASCADE',
          constraints: false
        })
      }
    }
  });
  return roles;
};