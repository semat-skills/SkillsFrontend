import { sequlize } from "../database";
import { DataTypes, ModelDefined, Optional } from "sequelize";

interface HikeAttributes {
  id: number;
  img: string;
  title: string;
  text: string;
}

type HikeCreationAttributes = Optional<
  HikeAttributes,
  "id" | "img" | "title" | "text"
>;

const Hike: ModelDefined<HikeAttributes, HikeCreationAttributes> =
  sequlize.define(
    "Hike",
    {
      id: {
        type: new DataTypes.INTEGER(),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      img: {
        type: new DataTypes.STRING(300),
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
    },
    {
      tableName: "hikes",
      timestamps: true,
    }
  );

export default Hike;
