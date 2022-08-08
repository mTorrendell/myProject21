const { sequelize, DataTypes, Model } = require('./model');


class Role extends Model { }

Role.init({
   // Model attributes are defined here
   firstName: {
      type: DataTypes.STRING,
      allowNull: false
   },
   lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
   }
}, {
   // Other model options go here
   sequelize, // We need to pass the connection instance
   modelName: 'role' // We need to choose the model name
});

module.exports = Article;