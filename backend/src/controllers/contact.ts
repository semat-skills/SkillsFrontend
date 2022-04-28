import { Request, Response, NextFunction } from "express";
import { handleaddContact } from "../handlers/contact";

export const addContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
   const result = handleaddContact(
      req.body.values.fullname,
      req.body.values.email,
      req.body.values.title,
      req.body.values.text,
      req.body.searchFor
    );
    res.status(200);
  } catch (err) {
    next(err);
  }
};
