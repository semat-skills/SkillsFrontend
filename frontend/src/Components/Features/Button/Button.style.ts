import styled from "styled-components";
import { webColors } from "../../styles/thems";

export const ButtonD = styled.button`
  padding: 10px;

  background-color: ${webColors.color1};
  min-width: 145px;
  min-height: 49px;

  box-shadow: 0px 11.6402px 46.5608px skyblue;
  border-radius: 6px;
  border-color: ${webColors.color1};

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;
  @media (min-width: 1024px) {
    left: 106px;
    top: 477px;
  }
`;
