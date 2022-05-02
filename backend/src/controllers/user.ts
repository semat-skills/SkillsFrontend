import { Request, Response, NextFunction } from "express";
import {
  handleSignup,
  handleLogin,
  handleUpdatePassword,
  handlerRmoveUser,
  handleLogout,
} from "../handlers/user";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, fullname, password } = req.body;
  try {
    const result = await handleSignup(email, fullname, password);

    if (result) {
      res.status(result.status);
      res.send(result.msg);
    }
  } catch (err) {
    next(err);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  try {
    const result = await handleLogin(email, password);

    if (result) {
      res.status(result.status);
      res.send(result.msg);
    }
  } catch (err) {
    next(err);
  }
};

export const updatePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userEmail, password } = req.body;
  try {
    const result = await handleUpdatePassword(userEmail, password);

    if (result) {
      res.status(result.status);
      res.send(result.msg);
    }
  } catch (err) {
    next(err);
  }
};

export const removeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userEmail } = req.params;
  try {
    const result = await handlerRmoveUser(userEmail);

    if (result) {
      res.status(result.status);
      res.send(result.msg);
    }
  } catch (err) {
    next(err);
  }
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await handleLogout();

    if (result) {
      res.status(result.status);
      res.send(result.msg);
    }
  } catch (err) {
    next(err);
  }
};
