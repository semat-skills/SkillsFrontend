import { sequlize } from "../database";
import { DataTypes, ModelDefined, Optional } from "sequelize";
import { ContactValues } from "../types";

type ContactCreationAttributes = Optional<
  ContactValues,
  "fullname" | "email" | "title" | "text" | "img"
>;

const Contact: ModelDefined<ContactValues, ContactCreationAttributes> =
  sequlize.define(
    "Contact",
    {
      id: {
        type: new DataTypes.INTEGER(),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      fullname: {
        type: new DataTypes.STRING(200),
        allowNull: false,
      },
      email: {
        type: new DataTypes.STRING(64),
        allowNull: false,
      },
      title: {
        type: new DataTypes.STRING(200),
        allowNull: false,
      },

      text: {
        type: new DataTypes.STRING(200),
        allowNull: false,
      },
      img: {
        type: new DataTypes.STRING(300),
        allowNull: false,
      },
    },
    {
      tableName: "contacts",
      timestamps: true,
    }
  );

export default Contact;
