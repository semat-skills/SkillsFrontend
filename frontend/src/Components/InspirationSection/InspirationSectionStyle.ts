import styled from "styled-components";
import { Colors } from "../../Assets/styles/thems";

export const Container = styled.div`
  padding-top: 40px;
  padding-left: 30px;
  padding-bottom: 40px;
  font-weight: 400;
  background-color: ${Colors.lightBlue};
  .cards {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    margin-bottom: 20px;
  }

  .btns-scroller {
    display: flex;
    flex-direction: row;
    align-items: right;
    justify-content: flex-end;
    padding-right: 70px;
    width: 100%;
    font-size: large;
    @media (min-width: 1024px) {
      padding-right: 110px;
    }
  }

  .scroller-container {
    display: flex;
    align-content: right;
    align-items: flex-start;
    width: 100%;
  }

  .scroller-btn {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: burlywood;
    border: 0.953333px solid #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
      background-color: navajowhite;
    }
  }
  .next {
    margin-left: 10px;
  }

  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 30px;

    color: black;
  }
`;
