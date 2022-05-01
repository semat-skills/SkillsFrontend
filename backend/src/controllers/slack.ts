import { Request, Response, NextFunction } from "express";
import Contact from "../models/contact.model";
import { handleIntegration } from "../API Manager/mondayAPI";
import { searchImg } from "../API Manager/googleAPI";
import { handleSlack } from "../handlers/slack";
import { handleResponse } from "../API Manager/slack";

export const slack = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("hiiiweb");
    if (req.body.event) {
      const userId = req.body.event.user;
      const searchFor = req.body.event.text.split(" ")[0];
      const result = handleSlack(userId, searchFor);
     

    }
    next();
  } catch (err) {
    next(err);
  }
};
