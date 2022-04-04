import styled from "styled-components";

export const Container = styled.div`
  font-family: "Roboto";
  display: flex;
  flex-direction: column;

  > * {
    &:nth-child(1) {
      height: calc(100% / 3 * 2);
      width: 100vw;
    }

    &:nth-child(2) {
      height: calc(100% / 3 * 1);
      width: 100vw;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row-reverse;

    > * {
      &:nth-child(1) {
        width: calc(100% / 3 * 1);
        height: 100vh;
      }

      &:nth-child(2) {
        width: calc(100% / 3 * 2);
        height: 100vh;
      }
    }
  }

  ///////////////////////
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /////////////////////////
  .ImgFrame {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 25px;
    background-color: skyblue;
    min-height: 200px;
  }
  @media (min-width: 1024px) {
  }

  .cir1 {
    position: relative;
    width: 95.82px;
    height: 95.82px;
    border-radius: 50%;

    border: 1.91632px solid #000000;
    box-sizing: border-box;
  }
`;
