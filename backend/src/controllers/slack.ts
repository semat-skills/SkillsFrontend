import { Request, Response, NextFunction } from "express";
import { handleSlack } from "../handlers/slack";

export const slack = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { event } = req.body.event;
  try {
    if (event) {
      const userId = event.user;
      const searchFor = event.text.split(" ")[0];
      const result = handleSlack(userId, searchFor);
    }
    next();
  } catch (err) {
    next(err);
  }
};
