import Slack from "../models/slack.model";
import { handleIntegration } from "../API Manager/slack";
import { searchImg } from "../API Manager/googleAPI";

export const handleSlack = async (userId: string, searchFor: string) => {
  try {
    const img: string = await searchImg(searchFor);

    const SlackMsg = await Slack.create({
      userId: userId,
      text: searchFor,
      img: img,
    });
    if (SlackMsg) {
      handleIntegration(userId, searchFor, img);
      const res = { status: 200, msg: "Added Successful!" };
      return res;
    }
  } catch (err) {
    //  res.status(400);
  }
};
