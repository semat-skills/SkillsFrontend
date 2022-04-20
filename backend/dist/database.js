"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequlize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
exports.sequlize = new sequelize_typescript_1.Sequelize('hiker', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    models: [__dirname + '/models']
});
