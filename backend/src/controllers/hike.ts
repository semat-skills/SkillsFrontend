import { Request, Response, NextFunction } from "express";
import {
  handleaddhike,
  handlegetHikes,
  handleremoveHike,
  handleupdateHikeTitle,
} from "../handlers/hike";

export const addhike = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await handleaddhike(
      req.body.img,
      req.body.title,
      req.body.text
    );
    if (result) {
      res.status(result.status);
      res.send(result.msg);
    }
  } catch (err) {
    next(err);
  }
};

export const updateHikeTitle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await handleupdateHikeTitle(
      req.params.hikeId,
      req.body.title
    );
    if (result) {
      res.status(result.status);
      res.send(result.msg);
    }
  } catch (err) {
    next(err);
  }
};

export const removeHike = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await handleremoveHike(req.params.hikeId);
    if (result) {
      res.status(result.status);
      res.send(result.msg);
    }
  } catch (err) {
    next(err);
  }
};

export const getHikes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await handlegetHikes();
    if (result) {
      res.status(result.status);
      res.send(result.msg);
    }
  } catch (err) {
    next(err);
  }
};
