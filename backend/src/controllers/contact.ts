import { Request, Response, NextFunction } from "express";
import { handleaddContact } from "../handlers/contact";

export const addContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await handleaddContact(
      req.body.values.fullname,
      req.body.values.email,
      req.body.values.title,
      req.body.values.text,
      req.body.searchFor
    );
    if (result) {
      res.status(result.status);
      res.send(result.msg);
    }
  } catch (err) {
    next(err);
  }
};
