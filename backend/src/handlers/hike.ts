import { Request, Response } from "express";
import Hike from "../models/hike.model";

export const handleaddhike = async (req: Request, res: Response) => {
  try {
    const hike = await Hike.create({
      img: req.body.img,
      title: req.body.title,
      text: req.body.text,
    });
    if (hike) {
      res.status(200);
      res.json({ status: "Added Successful!" });
    }
  } catch (err) {
    res.status(400);
  }
};

export const handleupdateHikeTitle = async (req: Request, res: Response) => {
  try {
    const hikeId = req.params.hikeId;
    const hike = await Hike.update(
      { title: req.body.title },
      { where: { id: hikeId } }
    );

    if (hike) {
      const hikeValue = hike.at(0);
      if (hikeValue === 0) {
        res.status(403).send({
          message: "Hike " + hikeId + " does not exists!",
        });
      } else if (hike) {
        res.status(200);
        res.send("Your Hike is updated!");
      }
    }
  } catch (err) {
    res.status(400);
  }
};

export const handleremoveHike = async (req: Request, res: Response) => {
  try {
    const hikeId = req.params.hikeId;
    const hike = await Hike.destroy({ where: { id: hikeId } });
    if (hike) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.send("Hike has been deleted!");
    }
  } catch (err) {
    res.status(400);
  }
};

export const handlegetHikes = async (req: Request, res: Response) => {
  try {
    const hikes = await Hike.findAll({});
    if (hikes) {
      res.status(200);
      res.setHeader("Content-Type", "application/json");
      res.send({ hikes: hikes });
    } else {
      res.status(403);
      res.send("No Hikes Found!");
    }
  } catch (err) {
    res.status(400);
  }
};
