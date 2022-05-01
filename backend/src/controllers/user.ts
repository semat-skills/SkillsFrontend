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
  try {
    const result = await handleSignup(
      req.body.email,
      req.body.fullname,
      req.body.password
    );

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
  try {
    const result = await handleLogin(req.body.email, req.body.password);

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
  try {
    const result = await handleUpdatePassword(
      req.params.userEmail,
      req.body.password
    );

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
  try {
    const result = await handlerRmoveUser(req.params.userEmail);

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
  const result = await handleLogout();

  if (result) {
    res.status(result.status);
    res.send(result.msg);
  }
};
