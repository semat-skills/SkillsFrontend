import styled from "styled-components";

export const Container = styled.div`
  font-family: "Roboto";

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;

  @media (min-width: 1024px) {
    justify-content: left;
    align-items: flex-start;
    padding-left: 100px;
    padding-bottom: 40px;
  }

  .sectionDescrption {
    font-family: "Roboto";

    width: 323px;
    height: 229px;
    left: 24px;
    top: 1522px;

    color: #3a3a3a;

    align-items: center;
  }

  .section-title {
    width: 338.73px;

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

    width: 323px;
    height: 229px;
    left: 24px;
    top: 1522px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #3a3a3a;

    margin-top: 30px;
    align-items: center;
  }
  .stories {
    @media (min-width: 1024px) {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
`;
