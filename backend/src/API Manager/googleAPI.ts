import axios, { AxiosResponse } from "axios";
import { ContactValues } from "../types";

const query =
  "mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:2584907448, item_name:$myItemName, column_values:$columnVals) { id } }";

export const searchImg = async () => {
  // console.log(contact.fullname);
  // const vars = {
  //   myItemName: contact.title,
  //   columnVals: JSON.stringify({
  //     text: contact.fullname,
  //     long_text3: { text: contact.text },
  //     text1: contact.email,
  //     long_text: { text: "urll99999lll" },
  //   }),
  // };

  const search: AxiosResponse = await axios.get(
    "https://www.googleapis.com/customsearch/v1?key=AIzaSyDP8Pp61bKmJrQ-0cWhooSbU1ICaSXvPMY&cx=e8d343b583c8b4120&q=hiking"
  );

  return(search.data.items[0].pagemap.imageobject[0].thumbnailurl)
};
