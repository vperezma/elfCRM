'use strict';
module.exports = function(sequelize, DataTypes) {
  var status = sequelize.define('status', {
    statusName: DataTypes.STRING
  }, {
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        status.hasMany(models.appointment, {
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          constraints: false
        })
      }
    }
  });
  return status;
};