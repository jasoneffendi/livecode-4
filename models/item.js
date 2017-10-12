'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    codeitem: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
       
      }
    }
  });

  Item.associate = function (models) {
    Item.hasMany(models.Suppliers)
    Item.belongsToMany(models.Suppliers,{through: 'SupplierItem'})
  };
  
  return Item;
};