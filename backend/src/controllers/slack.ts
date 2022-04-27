import { Request, Response, NextFunction } from "express";
import Contact from "../models/contact.model";
import { handleIntegration } from "../API Manager/mondayAPI";
import { searchImg } from "../API Manager/googleAPI";
import { handleSlack } from "../handlers/slack";

export const slack = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("hiiiweb");
    const userId = req.body.event.user;
    const searchFor = req.body.event.text.split(" ")[0];
    const result = handleSlack(userId, searchFor);
  //  const status: string = result.status;
  //  res.status(result.status);
 //   res.send(result.msg);
    res.send("added!");
  } catch (err) {
    next(err);
  }
};
