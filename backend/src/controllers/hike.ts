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
    handleaddhike(req, res);
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
    handleupdateHikeTitle(req, res);
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
    handleremoveHike(req, res);
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
    handlegetHikes(req, res);
  } catch (err) {
    next(err);
  }
};
