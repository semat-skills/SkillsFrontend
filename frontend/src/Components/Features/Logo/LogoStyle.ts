import React from "react";
import styled, { css } from "styled-components";
import { webColors } from "../../styles/thems";
import px2vw from "../../draft/px2vw";

export const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${webColors.color1};
  /* width: 120px;
  height: ${px2vw(70)};
  margin-left: 6.3vw;
  margin-top: 0.3vh; */
  min-width: 76px;
min-height: 36px;

  font-size: 3.5vw;
`;
