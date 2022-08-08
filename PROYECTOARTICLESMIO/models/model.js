const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

//crear conexion con base de datos
const sequelize = new Sequelize(
   process.env.DB_DATABASE,
   process.env.DB_USERNAME,
   process.env.DB_PASSWORD,
   {
      host: process.env.DB_HOST,
      dialect: process.env.DB_CONNECTION,
      logging: false,
   }
);

const Article = require("./articleModel")({ Sequelize, DataTypes, Model })
const Role = require("./articleModel")({ Sequelize, DataTypes, Model })
const Comment = require("./articleModel")({ Sequelize, DataTypes, Model })
const User = require("./articleModel")({ Sequelize, DataTypes, Model })


//Creamos las relaciones (la tabla genera una columna del ID de la entidad realcionada - si es necesario )
User.hasMany(Article);
Article.belongsTo(User);

Article.hasMany(Comment);
Comment.belongsTo(Article);

User.hasMany(Comment);
Comment.belongsTo(User);

Role.hasMany(User);
User.belongsTo(Role);

//Exportando todos las entidades-clases-va en mayuscula
module.exports = {
   sequelize,
   Article,
   Role,
   Comment,
   User,
}

