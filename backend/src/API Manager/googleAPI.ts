import axios, { AxiosResponse } from "axios";

export const searchImg = async (searchFor: string) => {
  const search: AxiosResponse = await axios.get(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API}&cx=${process.env.CX}&q=${searchFor}`
  );

  return search.data.items[0].pagemap.imageobject[0].thumbnailurl;
};
