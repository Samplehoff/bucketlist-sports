'use strict';
module.exports = (sequelize, DataTypes) => {
  const stadiums = sequelize.define('stadiums', {
    name: DataTypes.STRING,
    team: DataTypes.STRING,
    type: DataTypes.STRING,
    location: DataTypes.STRING,
    sports: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {});
  stadiums.associate = function(models) {
    // associations can be defined here
  };
  return stadiums;
};