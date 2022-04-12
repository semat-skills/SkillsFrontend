import { CardValues, NewUser } from "../Consts/types";

export type Action =
  | { type: "ADD_USER"; payload: NewUser }
  | { type: "ADD_CARD"; payload: CardValues };

export const addUser = (newUser: NewUser): Action => ({
  type: "ADD_USER",
  payload: newUser,
});

export const addCard = (newUser: CardValues): Action => ({
  type: "ADD_CARD",
  payload: newUser,
});
