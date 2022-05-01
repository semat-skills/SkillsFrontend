import Hike from "../models/hike.model";
import { Res } from "../types";

export const handleaddhike = async (
  img: string,
  title: string,
  text: string
) => {
  try {
    const hike = await Hike.create({
      img: img,
      title: title,
      text: text,
    });
    if (hike) {
      const res: Res = {
        status: 200,
        msg: "Added Successful!",
      };
      return res;
    }
  } catch (err) {
    const res: Res = { status: 400, msg: "ERROR!" };
    return res;
  }
};

export const handleupdateHikeTitle = async (hikeId: string, title: string) => {
  try {
    const hikeid = hikeId;
    const hike = await Hike.update({ title: title }, { where: { id: hikeid } });

    if (hike) {
      const hikeValue = hike.at(0);
      if (hikeValue === 0) {
        const res: Res = {
          status: 403,
          msg: "Hike " + hikeid + " does not exists!",
        };
        return res;
      } else if (hike) {
        const res: Res = {
          status: 200,
          msg: "Your Hike is updated!",
        };
        return res;
      }
    }
  } catch (err) {
    const res: Res = { status: 400, msg: "ERROR!" };
    return res;
  }
};

export const handleremoveHike = async (hikeId: string) => {
  try {
    const hikeid = hikeId;
    const hike = await Hike.destroy({ where: { id: hikeid } });
    if (hike) {
      const res: Res = {
        status: 200,
        msg: "Hike has been deleted!",
      };
      return res;
    }
  } catch (err) {
    const res: Res = { status: 400, msg: "ERROR!" };
    return res;
  }
};

export const handlegetHikes = async () => {
  try {
    const hikes = await Hike.findAll({});
    if (hikes) {
      const res: Res = {
        status: 200,
        msg: "done",
        hikes: hikes,
      };
      return res;
    } else {
      const res: Res = {
        status: 403,
        msg: "No Hikes Found!",
      };
      return res;
    }
  } catch (err) {
    const res: Res = { status: 400, msg: "ERROR!" };
    return res;
  }
};
