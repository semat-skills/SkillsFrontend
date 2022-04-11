import styled from "styled-components";
import { Colors } from "../../Assets/styles/thems";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  .functional-intro {
    padding: 70px;
    @media (min-width: 1024px) {
      padding: 106px;
    }
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
    margin-right: 10px;
    @media (min-width: 1024px) {
      margin-right: 0px;
    }
  }
  .left-btn{
    margin-left: 0px;
    margin-right: 10px;
    @media (min-width: 1024px) {
      margin-right: 10px;
    }

  }
  .section-title {
    width: 338.73px;
    padding-bottom: 10px;
    left: 0px;
    top: 0px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;

    color: black;
  }

  .section-text {
    height: 144px;
    width: 50%;
    left: 24px;
    top: 1522px;

    font-style: normal;
    font-weight: 400;
    font-size: large;
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
    justify-content: flex-start;
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
    align-items: center;
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 56px;
    font-size: medium;

    &:hover {
      cursor: pointer;
      background-color: skyblue;
    }
  }

  h4{
    padding-bottom: 20px;
  }
`;
