import styled from "styled-components";

type Props = {
  type: "button" | "submit" | "reset" | undefined;
  disabled: (() => void) | undefined | boolean;
};

export const Button = styled.button<Props>`
  /* position: absolute; */

  align-items: center;
  align-content: center;
  padding: 10px;
  /* Dark gray */

  background: #5a5a5a;
  width: 145px;
  height: 49px;
  left: 24px;
  top: 368px;

  box-shadow: 0px 11.6402px 46.5608px rgba(0, 0, 0, 0.06);
  border-radius: 6px;

  /// text
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;
  @media (min-width: 1024px) {

position: absolute;
left: 106px;
top: 477px;

  } 
`;

// position: relative;
