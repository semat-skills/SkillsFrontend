import { Sequelize } from "sequelize";

export const sequlize = new Sequelize("hiker", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});
