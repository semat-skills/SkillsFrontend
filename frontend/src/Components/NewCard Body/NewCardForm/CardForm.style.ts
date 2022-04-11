import styled from "styled-components";
import { Colors } from "../../../Assets/styles/thems";

export const Container = styled.div`
  max-width: 511px;
  min-width: 370px;
  background: ${Colors.white};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 70px;
  margin-top: 10px;

  @media (min-width: 1024px) {
    min-width: 511px;
    max-width: 600px;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 25px;
    height: 72px;
    @media (min-width: 1024px) {
      justify-content: flex-start;
    }
  }

  p {
    color: #b3b3b3;
    font-weight: 300;
    padding-top: 10px;
  }

  .input-text {
    background: ${Colors.white};
    font-size: medium;
    padding: 12px 16px;
    border: 1px solid #d6d6d6;
    box-sizing: border-box;
    border-radius: 4px;
    font-weight: normal;
  }
  .input-textarea {
    min-height: 220px;
  }
  .input-file {
    min-height: 45px;
  }
  .inputDiv {
    display: flex;
    flex-direction: column;

    margin-bottom: 15px;
  }

  a {
    text-decoration: none !important;
  }

  .check-text {
    display: flex;
    flex-direction: row;
  }
  .terms {
    margin-left: 5px;
  }
  .password {
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
      width: auto;
    }
  }
`;
