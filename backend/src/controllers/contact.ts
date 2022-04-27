import { Request, Response, NextFunction } from "express";
import { handleaddContact } from "../handlers/contact";

export const addContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    handleaddContact(req, res);
  } catch (err) {
    next(err);
  }
};
