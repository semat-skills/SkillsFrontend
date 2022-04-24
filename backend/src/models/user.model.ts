"use strict";
import { sequlize } from "../database";
import { DataTypes, ModelDefined, Optional } from "sequelize";

interface UserAttributes {
  email: string;
  fullname: string;
  password: string;
}

type UserCreationAttributes = Optional<
  UserAttributes,
  "email" | "fullname" | "password"
>;

const User: ModelDefined<UserAttributes, UserCreationAttributes> =
  sequlize.define(
    "User",
    {
      email: {
        type: new DataTypes.STRING(64),
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      fullname: {
        type: new DataTypes.STRING(200),
        allowNull: false,
      },
      password: {
        type: new DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      tableName: "users",
      timestamps: true,
    }
  );

export default User;

//////////////////////////////////////////////////////////

// @Table({
//   tableName: "user",
//   timestamps: true,
// })
// export default class User extends Model implements UserProps {
//   @PrimaryKey
//   @AllowNull(false)
//   @NotEmpty
//   @Column
//   email: string;

//   @AllowNull(false)
//   @NotEmpty
//   @Column
//   fullname: string;

//   @AllowNull(false)
//   @NotEmpty
//   @Column
//   password: string;
// }

// const User = (sequelize: any, DataTypes: any) => {
//     class User extends Model<UserAttributes>
//     implements UserAttributes {
//       /**
//        * Helper method for defining associations.
//        * This method is not a part of Sequelize lifecycle.
//        * The `models/index` file will call this method automatically.
//        */
//       email!: string;
//       fullname!: string;
//       password!: string;
//     //   static associate(models: any) {
//     //     // define association here
//     //     User.belongsToMany(models.Project, {
//     //       through: 'ProjectAssignments'
//     //     })
//     //   }
//     };
//     User.init({
//         email: {
//             type: DataTypes.STRING,
//         allowNull: false,
//         primaryKey: true,
//         unique: true
//       },
//       fullname: {
//         type: DataTypes.STRING,
//         allowNull: false
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false
//       }
//     }, {
//       sequelize,
//       modelName: 'User',
//     });
//     return User;
//   };

//   module.exports = User;
