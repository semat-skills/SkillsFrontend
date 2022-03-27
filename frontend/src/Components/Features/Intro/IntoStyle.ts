import React from "react";
import styled, { css } from "styled-components";
import { webColors } from "../../styles/thems";

export const IntroDiv = styled.div`
  background-color: ${webColors.color5};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 50px;
  }
`;
