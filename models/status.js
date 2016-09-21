'use strict';
module.exports = function(sequelize, DataTypes) {
  var status = sequelize.define('status', {
    statusName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return status;
};