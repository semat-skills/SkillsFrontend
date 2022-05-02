import Slack from "../models/slack.model";
import { handleIntegration, handleResponse } from "../API Manager/slack";
import { searchImg } from "../API Manager/googleAPI";

export const handleSlack = async (userId: string, searchFor: string) => {
  try {
    const img: string = await searchImg(searchFor);

    const SlackMsg = await Slack.create({
      userId,
      text: searchFor,
      img,
    });
    if (SlackMsg) {
      handleIntegration(userId, searchFor, img);
      handleResponse(img);
      const res = { status: 200, msg: "Added Successful!" };
      return res;
    }
  } catch (err) {
    throw new Error("ERROE!");
  }
};
