import React from "react";
import styled, { css } from "styled-components";
import { webColors } from "../../styles/thems";
import px2vw from "../../draft/px2vw";

interface HeaderStyleProps {}

export const HeaderStyle = styled.header`
  background-color: ${webColors.color3};

  width: 100vw;
  min-height: 72px;
  left: 0px;
  right: 0px;
  margin: 0px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 18px;
  padding-bottom: 18px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 1024px) {
    padding-left: 105px;
  padding-right: 105px;
  padding-top: 18px;
  padding-bottom: 18px;
  }

  .link{
    text-decoration: none;
    color: black;
    font-size: large;
  }
  .bord{
    font-size: large;
    padding: 0px 10px;
  }
  
`;
