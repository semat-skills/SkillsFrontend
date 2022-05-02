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
