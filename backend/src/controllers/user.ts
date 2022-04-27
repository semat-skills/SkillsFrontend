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
    handleSignup(req, res);
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
    handleLogin(req, res);
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
    handleUpdatePassword(req, res);
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
    handlerRmoveUser(req, res);
  } catch (err) {
    next(err);
  }
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  handleLogout(req, res);
};
