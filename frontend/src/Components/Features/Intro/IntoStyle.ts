import React from "react";
import styled, { css } from "styled-components";
import { webColors } from "../../styles/thems";

export const IntroDiv = styled.div`
  background-color: ${webColors.color5};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding:20px;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 120px;
    
  }

  .photoDiv{
    padding-top: 30px;
    padding-bottom: 30px;

    @media (min-width: 1024px) {
    
    padding-right: 40px;
  }
  }
`;
