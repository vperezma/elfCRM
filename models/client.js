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
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        client.hasMany(models.address, {
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          constraints: false
        }),
        this.hasMany(models.appointment,{
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          constraints: false
        })
      }
    }
  });
  return client;
};