import { Request, Response, NextFunction } from "express";
import Contact from "../models/contact.model";
import { handleIntegration } from "../API Manager/mondayAPI";
import { searchImg } from "../API Manager/googleAPI";
// import handleIntegration 

export const addContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const img: string = await searchImg();

    const contact = await Contact.create({
      fullname: req.body.fullname,
      email: req.body.email,
      title: req.body.title,
      text: req.body.text,
      img: img,
    });
    if (contact) {
      res.status(200);
      res.json({ status: "Added Successful!" });

      handleIntegration(req.body, img);
      
    }
  } catch (err) {
    next(err);
  }
};
