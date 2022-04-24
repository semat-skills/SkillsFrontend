import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import { signup, login, updatePassword, removeUser } from "../controllers/user";

const router = express.Router();

router.use(bodyParser.json());

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("respond with a resource");
});

router.post("/signup", signup);
router.post("/login", login);
router.put("/:userEmail/updatePassword", updatePassword);
router.delete("/:userEmail/removeUser", removeUser);

export default router;
