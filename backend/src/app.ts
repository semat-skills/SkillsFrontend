import express, {
  Request,
  Response,
  NextFunction,
  Application,
  ErrorRequestHandler,
} from "express";
import { Server } from "http";
import createHttpError from "http-errors";
import { config } from "dotenv";
import { sequlize } from "./database";
import User from "./models/user.model";
import Hike from "./models/hike.model";
import usersRouter from "./routes/user";
import hikesRouter from "./routes/hike";
import contactRouter from "./routes/contact";
import slackRouter from "./routes/slack";
import cors from "cors";
import Contact from "./models/contact.model";
import bodyParser from "body-parser";

const Usermodel = User;
const Hikemodel = Hike;
const Contactmodel = Contact;

config();

const app: Application = express();

const router = express.Router();

router.use(bodyParser.json());

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200);
  res.send("Hello from Hikers");
});

app.use("/users", usersRouter);
app.use("/hikes", hikesRouter);
app.use("/contact", contactRouter);
app.use("/slack-webhook", slackRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
};

app.use(errorHandler);

const PORT: Number = Number(process.env.PORT) || 3000;

const server: Server = app.listen(PORT, async () => {
  console.log(`🚀 is on Port ${PORT}`);

  sequlize.authenticate().then(async () => {
    console.log("Connection has been established successfully.");

    try {
      await sequlize.sync();
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  });
});

export default app;
