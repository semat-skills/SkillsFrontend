import { Request, Response } from "express";
import Contact from "../models/contact.model";
import { handleIntegration } from "../API Manager/mondayAPI";
import { searchImg } from "../API Manager/googleAPI";

export const handleaddContact = async (
  fullname: string,
  email:string,
  title:string,
  text:string,
  searchFor:string
) => {
  try {
    const img: string = await searchImg(searchFor);

    const contact = await Contact.create({
      fullname: fullname,
      email: email,
      title: title,
      text: text,
      img: img,
    });
    if (contact) {
      const res = { status: 200, msg: "Added Successfully!" };

     // handleIntegration(fullname, email, title, text, searchFor, img);
    }
  } catch (err) {
    const res = { status: 400, msg: "ERROR" };
  }
};
