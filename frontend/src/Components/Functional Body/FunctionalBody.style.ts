import styled from "styled-components";
import { Colors } from "../../Assets/styles/thems";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  .functional-intro {
    margin: 40px;
  }
  .active-btn {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background-color: red;
    margin-right: 10px;
  }
  .push {
    justify-content: flex-end;
    margin-left: auto;
  }
  .section-title {
    width: 338.73px;
    padding-bottom: 10px;
    left: 0px;
    top: 0px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;

    color: #000000;
  }

  .section-text {
    font-family: "Roboto";

    height: 144px;
    left: 14.4%;
    right: 15.47%;
    top: 1565px;

    width: 50%;
    left: 24px;
    top: 1522px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #3a3a3a;

    margin-top: 30px;
    margin-bottom: 30px;
    align-items: center;
  }

  .cards-results {
    padding: 70px;
    background-color: ${Colors.whiteBlue};
    @media (min-width: 1024px) {
      padding: 106px;
    }
  }

  .cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 40px;
  }

  .filters {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    min-width: 100%;
    overflow-x: scroll;
    /* padding: 10px; */

    @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .leftFilters {
    display: flex;
    flex-direction: row;
  }

  .filter-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 104px;
    height: 36px;
    margin: 10px;
    align-items: center;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 56px;
    font-size: medium;

    &:hover {
      cursor: pointer;
      background-color: skyblue;
    }
  }
`;
