'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(500)
    },
    photoUrl: {
      type: DataTypes.STRING(255),
    },
    authorCredited: {
      type: DataTypes.STRING(50)
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
    Photo.belongsTo(models.User, {foreignKey: "userId"})
  };
  return Photo;
};
