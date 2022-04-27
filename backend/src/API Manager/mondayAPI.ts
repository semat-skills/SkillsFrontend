import axios, { AxiosResponse } from "axios";
import { ContactValues } from "../types";

const query =
  "mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:2584907448, item_name:$myItemName, column_values:$columnVals) { id } }";

export const handleIntegration = async (
  contact: ContactValues,
  img: string
) => {
  const MONDAY: string = process.env.MONDAY_AUTH || "";
  const vars = {
    myItemName: contact.title,
    columnVals: JSON.stringify({
      text: contact.fullname,
      long_text3: { text: contact.text },
      text1: contact.email,
      image1: img,
    }),
  };
  const addToBoard: AxiosResponse = await axios.post(
    "https://api.monday.com/v2",
    {
      query: query,
      variables: JSON.stringify(vars),
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: MONDAY,
      },
    }
  );
};
