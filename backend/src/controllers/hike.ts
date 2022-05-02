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
  const { img, title, text } = req.body;
  try {
    const result = await handleaddhike(img, title, text);
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
  const { title } = req.body;
  const { hikeId } = req.params;
  try {
    const result = await handleupdateHikeTitle(hikeId, title);
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
  const { hikeId } = req.params;
  try {
    const result = await handleremoveHike(hikeId);
    if (result) {
      res.status(result.status);
      res.send(result.msg);
    }
  } catch (err) {
    next(res.status);
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
