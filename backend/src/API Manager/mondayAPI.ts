import axios, { AxiosResponse } from "axios";

const query =
  "mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:2584907448, item_name:$myItemName, column_values:$columnVals) { id } }";

export const handleIntegration = async (
  fullname: string,
  email: string,
  title: string,
  text: string,
  img: string
) => {
  const MONDAY: string = process.env.MONDAY_AUTH || "";
  const vars = {
    myItemName: title,
    columnVals: JSON.stringify({
      text: fullname,
      long_text3: { text: text },
      text1: email,
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
