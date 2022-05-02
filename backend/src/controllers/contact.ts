import { Request, Response, NextFunction } from "express";
import { handleaddContact } from "../handlers/contact";

export const addContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { fullname, email, title, text } = req.body.values;
  const { searchFor } = req.body;
  try {
    const result = await handleaddContact(
      fullname,
      email,
      title,
      text,
      searchFor
    );
    if (result) {
      res.status(result.status);
      res.send(result.msg);
    }
  } catch (err) {
    next(err);
  }
};
