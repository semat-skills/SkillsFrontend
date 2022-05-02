import express, { Request, Response, NextFunction } from "express";
import {
  signup,
  login,
  logout,
  updatePassword,
  removeUser,
} from "../controllers/user";

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("respond with a resource");
});

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/:userEmail/updatePassword", updatePassword);
router.delete("/:userEmail/removeUser", removeUser);

export default router;
