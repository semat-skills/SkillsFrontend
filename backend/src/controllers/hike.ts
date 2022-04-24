import { Request, Response, NextFunction } from "express";
import Hike from "../models/hike.model";


type Hikeslist = {
  hikes:[]
}
export const addhike = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await Hike.create({
    img: req.body.img,
    title: req.body.title,
    text: req.body.text,
  })
    .then(
      (hike) => {
        res.status(200);
        res.json({ status: "Added Successful!" });
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

export const updateHikeTitle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const hikeId = req.params.hikeId;
  await Hike.update({ title: req.body.title }, { where: { id: hikeId } })

    .then((hike) => {
      const hikeValue = hike.at(0);
      if (hikeValue === 0) {
        res.status(403).send({
          message: "Hike " + hikeId + " does not exists!",
        });
      } else if (hike) {
        res.status(200);
        res.send("Your Hike is updated!");
      } else {
        res.send("ok");
      }
    })
    .catch((err) => next(err));
};

export const removeHike = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const hikeId = req.params.hikeId;
  await Hike.destroy({ where: { id: hikeId } })
    .then((hike) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.send("Hike has been deleted!");
    })
    .catch((err) => next(err));
};

export const getHikes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // res.setHeader('Content-Type', 'application/json');
    // res.send("done");
    const hikes = await Hike.findAll({});
    if (hikes) {
    //  const obj: Hikeslist = JSON.parse(hikes);
      res.status(200);
      res.setHeader('Content-Type', 'application/json');
      //  res.json({ status: "returned Successful!" });
    //  res.send({hikes:hikeslist});
    res.send("done")
    } else {
      res.status(403);
      res.send("No Hikes Found!");
    }
  } catch (err) {
    next(err);
  }
};
