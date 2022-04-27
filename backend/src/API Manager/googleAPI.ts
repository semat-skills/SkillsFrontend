import axios, { AxiosResponse } from "axios";

const query =
  "mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:2584907448, item_name:$myItemName, column_values:$columnVals) { id } }";

export const searchImg = async (searchFor: string) => {
  const search: AxiosResponse = await axios.get(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API}&cx=${process.env.CX}&q=${searchFor}`
  );

  return search.data.items[0].pagemap.imageobject[0].thumbnailurl;
};
