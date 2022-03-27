import styled from "styled-components";
import { webColors } from '../../styles/thems';

export const ButtonD = styled.button`
  /* position: absolute; */

  /* align-items: center;
  align-content: center; */
  padding: 10px;

  /* background: #5a5a5a; */
  background-color: ${webColors.color1};
  min-width: 145px;
  min-height: 49px;
  /* left: 24px;
  top: 368px; */

  box-shadow: 0px 11.6402px 46.5608px skyblue;
  border-radius: 6px;
  border-color: ${webColors.color1};

  /// text
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;
  @media (min-width: 1024px) {
    /* position: absolute; */
    left: 106px;
    top: 477px;
  }
`;

// position: relative;
