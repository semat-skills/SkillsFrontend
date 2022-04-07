import styled from "styled-components";
import { Colors } from "../../Assets/styles/thems";

export const StyledButton = styled.button`
  padding: 10px;

  background-color: ${Colors.pelorous};
  min-width: 145px;
  min-height: 49px;

  box-shadow: 0px 11.6402px 46.5608px skyblue;
  border-radius: 6px;
  border-color: ${Colors.pelorous};

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: ${Colors.white};
  @media (min-width: 1024px) {
    left: 106px;
    top: 477px;
  }
`;
