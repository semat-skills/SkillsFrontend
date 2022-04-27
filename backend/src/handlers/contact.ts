import { Request, Response } from "express";
import Contact from "../models/contact.model";
import { handleIntegration } from "../API Manager/mondayAPI";
import { searchImg } from "../API Manager/googleAPI";

export const handleaddContact = async (
  req: Request,
  res: Response,
) => {
  try {
    const img: string = await searchImg(req.body.searchFor);

    const contact = await Contact.create({
      fullname: req.body.values.fullname,
      email: req.body.values.email,
      title: req.body.values.title,
      text: req.body.values.text,
      img: img,
    });
    if (contact) {
      res.status(200);
      res.json({ status: "Added Successful!" });

      handleIntegration(req.body.values, img);
    }
  } catch (err) {
    res.status(400);
  }
};