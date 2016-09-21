'use strict';
module.exports = function(sequelize, DataTypes) {
  var appointment = sequelize.define('appointment', {
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING
  }, {
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        appointment.belongsTo(models.client, {
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          constraints: false
        }),
        appointment.belongsToMany(models.user,{
          through: 'appointmentUser',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          constraints: false
        }),
        appointment.belongsTo(models.user,{
          as:'takenBy',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          constraints: false
        }),
        appointment.belongsTo(models.categories, {
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          constraints: false
        }),
        appointment.belongsTo(models.status, {
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          constraints: false
        })
      }
    }
  });
  return appointment;
};