import axios, { AxiosResponse } from "axios";
import { ContactValues } from "../types";

const query =
  "mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:2584907448, item_name:$myItemName, column_values:$columnVals) { id } }";

export const handleIntegration = async (contact: ContactValues, img: string) => {
  console.log(contact.fullname);
  const vars = {
    myItemName: contact.title,
    columnVals: JSON.stringify({
      text: contact.fullname,
      long_text3: { text: contact.text },
      text1: contact.email,
      image1: img ,
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
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE1NzE4NzkxOCwidWlkIjoyODY2MjMxOCwiaWFkIjoiMjAyMi0wNC0yNFQxMDoyNDoyNi4wNTNaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTEwMjMyOCwicmduIjoidXNlMSJ9.3R7Xde6GJM1PBcvyPsjOkRq5UgBFUaFIvN5TrxyEFEU",
      },
    }
  );
};
