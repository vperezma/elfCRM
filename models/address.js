'use strict';
module.exports = function(sequelize, DataTypes) {
  var address = sequelize.define('address', {
    address: DataTypes.STRING,
    suite: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return address;
};