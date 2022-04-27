import axios, { AxiosResponse } from "axios";

const query =
  "mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:2598383504, item_name:$myItemName, column_values:$columnVals) { id } }";

export const handleIntegration = async (
  userId: string,
  searchFor: string,
  img: string
) => {
  const MONDAY: string = process.env.MONDAY_AUTH || "";
  const vars = {
    myItemName: searchFor,
    columnVals: JSON.stringify({
      text: userId,
      text4: img,
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
