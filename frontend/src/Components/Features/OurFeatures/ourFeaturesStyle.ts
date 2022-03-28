import styled from 'styled-components';


export const FeaturesDiv = styled.div`
font-family: 'Roboto';

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

  .stories{
    @media (min-width: 1024px) {
      width: 100%;
      display: flex;
    justify-content: flex-end;
   /* align-items: flex-end; */
   

  }

  }

`;