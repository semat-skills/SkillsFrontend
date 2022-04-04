import styled from "styled-components";
import { Colors } from "../../../Consts/styles/thems";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    width: 100%;
    justify-content: flex-end;
    align-items: right;
  }

  .first {
    display: flex;
    flex-direction: column;
    @media (min-width: 1024px) {
      flex-direction: row;
      padding-left: 140px;
    }
  }

  .second {
    display: flex;
    flex-direction: column;
    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }

  @media (min-width: 1024px) {
  }

  .StoryBox {
    font-family: "Roboto";

    width: 323px;
    height: 229px;
    left: 24px;
    top: 1522px;

    background-color: ${Colors.lightBlue};

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #3a3a3a;

    padding: 30px;
    margin: 22px;
    align-items: center;
  }
`;
