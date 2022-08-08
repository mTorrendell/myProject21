const { sequelize, DataTypes, Model } = require('./model');

class Article extends Model { }

Article.init({
  // Model attributes are defined here
  title: {
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
  modelName: 'article' // We need to choose the model name
});

module.exports = Article;