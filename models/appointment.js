'use strict';
module.exports = function(sequelize, DataTypes) {
  var appointment = sequelize.define('appointment', {
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return appointment;
};