import { Action } from "../actions/actions";
import cardData from "../Consts/CardsData";
import { CardValues, NewUser } from "../Consts/types";

export type State = {
  users: NewUser[];
  cards: CardValues[];
};

const initialState = {
  users: [
    {
      fullname: "Admin Admin",
      email: "admin@email.com",
      password: "password",
    },
  ],
  cards: cardData,
};
export const rootReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_USER": {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    }
    case "ADD_CARD": {
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    }
    default:
      return state;
  }
};
