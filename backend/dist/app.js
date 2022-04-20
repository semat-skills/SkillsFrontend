"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
// sequlize
//   .authenticate()
//   .then(async () => {
//     console.log("Connection has been established successfully.");
//     try {
//       await sequlize.sync({ force: true });
//     } catch (error) {
//       console.error("Unable to connect to the database:", error);
//     }
//   })
//   .catch((e: any) => {
//     console.log(e.message);
//   });
app.get("/", (req, res, next) => {
    res.send("Hello from ts App");
});
app.use((req, res, next) => {
    next(new http_errors_1.default.NotFound());
});
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message,
    });
};
app.use(errorHandler);
const PORT = Number(process.env.PORT) || 3000;
const server = app.listen(PORT, () => console.log(`🚀 is on Port ${PORT}`));
