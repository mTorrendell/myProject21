module.exports = (sequelize, Model, DataTypes) => {
   class RoleModel extends Model { }

   RoleModel.init(
      {
         id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
         },
         name: {
            type: DataTypes.TEXT,
         },
         code: {
            type: DataTypes.SMALLINT,
         },
      },
      {
         sequelize,
         modelName: "role",
      }
   );

   return RoleModel;
};
