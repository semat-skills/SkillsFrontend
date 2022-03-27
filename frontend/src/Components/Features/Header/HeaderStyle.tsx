import React from "react";
import styled, { css } from "styled-components";
import { webColors } from "../../styles/thems";
import px2vw from "../../draft/px2vw";

interface HeaderStyleProps {}

export const HeaderStyle = styled.header`
  background-color: ${webColors.color3};

  width: 100vw;

  height: ${px2vw(88)};
  left: 0px;
  right: 0px;
  margin: 0px;
  padding: 0px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
