'use strict';
module.exports = function(sequelize, DataTypes) {
  var client = sequelize.define('client', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    DOB: DataTypes.STRING,
    middleInitial: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return client;
};