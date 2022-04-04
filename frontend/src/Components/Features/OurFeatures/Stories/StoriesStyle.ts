import styled from "styled-components";

export const StoriesDiv = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  .first {
    display: flex;
    flex-direction: column;
    @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: right;
      align-items: flex-end;
      margin-left: 250px;
    }
  }

  .second {
    display: flex;
    flex-direction: column;
    @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: right;
      align-items: flex-end;
      margin-left: 180px;
    }
  }

  @media (min-width: 1024px) {
  }
`;
