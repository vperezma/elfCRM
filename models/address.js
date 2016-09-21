'use strict';
module.exports = function(sequelize, DataTypes) {
  var address = sequelize.define('address', {
    address: DataTypes.STRING,
    suite: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        address.belongsTo(models.client, {
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          constraints: false
        })
      }
    }
  });
  return address;
};