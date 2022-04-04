import styled from "styled-components";
import { Colors } from "../../Consts/styles/thems";

export const Container = styled.div`
  background-color: ${Colors.whiteBlue};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 120px;
  }

  .photoDiv {
    padding-top: 30px;
    padding-bottom: 30px;

    @media (min-width: 1024px) {
      padding-right: 40px;
    }
  }

  .intro-main-title {
    width: 100%;
    font-family: "Roboto";
    padding-bottom: 20px;
  }

  .bigTitle {
    width: 100%;
    height: 118px;
    left: 0px;
    top: 75px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 59px;

    color: #000000;
  }
`;
