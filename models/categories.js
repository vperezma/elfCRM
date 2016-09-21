'use strict';
module.exports = function(sequelize, DataTypes) {
  var categories = sequelize.define('categories', {
    categoryName: DataTypes.STRING
  }, {
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        categories.hasMany(models.appointment,{
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          constraints: false
        })
      }
    }
  });
  return categories;
};