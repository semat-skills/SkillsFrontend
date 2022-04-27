import { Request, Response} from "express";
import User from "../models/user.model";

export const handleSignup = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
      res.status(403).send({
        message: "User " + req.body.email + " already exists!",
      });
    } else {
      const newUser = await User.create({
        email: req.body.email,
        fullname: req.body.fullname,
        password: req.body.password,
      });

      if (newUser) {
        res.status(200);
        res.json({ status: "Resgistration Successful!" });
      }
    }
  } catch (err) {
    res.status(400);
  }
};

export const handleLogin = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user === null) {
      res.status(403).send({
        message: "User " + req.body.email + " does not exists!",
      });
    } else if (user) {
      const email = user.getDataValue("email");
      const password = user.getDataValue("password");

      if (password !== req.body.password) {
        res.status(403);
        res.send("Your password is incorrect!");
      } else if (email === req.body.email && password == req.body.password) {
        res.status(200);

        res.end("You are authenticated!");
      }
    }
  } catch (err) {
    res.status(400);
  }
};

export const handleUpdatePassword = async (req: Request, res: Response) => {
  try {
    const email = req.params.userEmail;
    const user = await User.update(
      { password: req.body.password },
      { where: { email: req.params.userEmail } }
    );

    if (user) {
      const userValue = user.at(0);
      if (userValue === 0) {
        res.status(403).send({
          message: "User " + email + " does not exists!",
        });
      } else {
        res.status(200);
        res.send("Your password is updated!");
      }
    }
  } catch (err) {
    res.status(400);
  }
};

export const handlerRmoveUser = async (req: Request, res: Response) => {
  try {
    const email = req.params.userEmail;
    const user = await User.destroy({ where: { email: req.params.userEmail } });
    if (user) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.send("User has been deleted!");
    }
  } catch (err) {
    res.status(400);
  }
};

export const handleLogout = async (req: Request, res: Response) => {
  res.send("logout");
};
