const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


const article = require("./articleModel")({ Sequelize, DataTypes, Model })
const role = require("./articleModel")({ Sequelize, DataTypes, Model })
const comment = require("./articleModel")({ Sequelize, DataTypes, Model })
const user = require("./articleModel")({ Sequelize, DataTypes, Model })


module.exports = {
   sequelize,
   article,
   role,
   comment,
   user,
}

