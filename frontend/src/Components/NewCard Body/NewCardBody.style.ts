import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  .newcard-intro {
    padding: 40px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.09),
      0px 0px 15px rgba(0, 0, 0, 0.09);
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
    left: 14.4%;
    right: 15.47%;
    top: 1565px;

    left: 24px;
    top: 1522px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #3a3a3a;

    margin-top: 30px;
    align-items: center;

    @media (min-width: 1024px) {
      width: 50%;
    }
  }

  .newCard-form{
    display: flex;
    justify-content: center;
  }
`;
