import styled from "styled-components";
import { webColors } from "../../styles/thems";

export const InsptDiv = styled.div`
  padding-top: 40px;
  padding-left: 30px;
  padding-bottom: 40px;
  font-family: "Roboto";
  font-weight: 400;
  background-color: ${webColors.color4};
  .cards {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
  }

  .btns-scroller {
    display: flex;
    flex-direction: row;
    /* text-align: center; */
    align-items: right;
    justify-content: flex-end;
    padding-right: 70px;
    width: 100%;
    font-size: large;
    @media (min-width: 1024px) {
      padding-right: 110px;
      /* margin-left:auto;
margin-right:0; */
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
`;

export const TitleDiv = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 30px;

  color: #000000;
`;
export const Slider = styled.div``;
