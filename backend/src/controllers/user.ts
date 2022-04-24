import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (user) {
        res.status(403).send({
          message: "User " + req.body.email + " already exists!",
        });
      } else {
        return User.create({
          email: req.body.email,
          fullname: req.body.fullname,
          password: req.body.password,
        });
      }
    })
    .then(
      (user) => {
        res.status(200);
        res.json({ status: "Resgistration Successful!" });
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await User.findOne({ where: { email: req.body.email } })
    .then((user) => {
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
      } else {
        res.status(200);
        res.send("ok");
      }
    })
    .catch((err) => next(err));
};

export const updatePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email = req.params.userEmail;
  await User.update(
    { password: req.body.password },
    { where: { email: req.params.userEmail } }
  )

    .then((user) => {
      const userValue = user.at(0);
      if (userValue === 0) {
        res.status(403).send({
          message: "User " + email + " does not exists!",
        });
      } else if (user) {
        res.status(200);
        res.send("Your password is updated!");
      } else {
        res.send("ok");
      }
    })
    .catch((err) => next(err));
};

export const removeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email = req.params.userEmail;
  await User.destroy({ where: { email: req.params.userEmail } })
    .then((user) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.send("User has been deleted!");
    })
    .catch((err) => next(err));
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("logout");
  // const email = req.params.userEmail;
  // await User.destroy({ where: { email: req.params.userEmail } })
  //   .then((user) => {
  //     res.statusCode = 200;
  //     res.setHeader("Content-Type", "application/json");
  //     res.send("User has been deleted!");
  //   })
  //   .catch((err) => next(err));
};

