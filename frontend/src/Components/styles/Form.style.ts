import styled from "styled-components";

export const MyForm = styled.div`
 font-family: "Roboto";
  max-width: 511px;
  min-width: 370px;
  background: #ffffff;
  border-radius: 8px 8px 0px 0px;
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;

  @media (min-width: 1024px) {
    border-radius: 0px;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 25px;

    @media (min-width: 1024px) {
      justify-content: left;
      align-items: flex-start;
    }
  }

  p {
    color: #b3b3b3;
    font-weight: 300;
  }

  .input-text {
    background: #ffffff;

    padding: 12px 16px;
    border: 1px solid #d6d6d6;
    box-sizing: border-box;
    border-radius: 4px;
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
