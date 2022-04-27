import { sequlize } from "../database";
import { DataTypes, ModelDefined, Optional } from "sequelize";
import { SlackValues } from "../types";

type SlackCreationAttributes = Optional<
  SlackValues,
  "userId" | "text" | "img"
>;

const Slack: ModelDefined<SlackValues, SlackCreationAttributes> =
  sequlize.define(
    "Slack",
    {
      id: {
        type: new DataTypes.INTEGER(),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      userId: {
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
      tableName: "slack",
      timestamps: true,
    }
  );

export default Slack;
