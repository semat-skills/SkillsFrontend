import React from "react";
import styled from "styled-components";
import { webColors } from "../../styles/thems";

// interface FooterStyleProps {

// }

export const FooterStyle = styled.footer`
    
  /* padding-top: 25px;
  padding-bottom: 25px; */

  position: relative;
  /* background: rgb(29 78 216); */
  background-color: ${webColors.color1};
  

 


  .f-container{
    display: flex;
     flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding-top: 8px;
  padding-bottom: 6px;

  /* width: 100%; */ //to check
  /* max-width: auto; */
  padding-left: 4px;
  padding-right: 4px;

  @media (min-width: 1024px) {
    width: 100vw;
    margin-top: 20px;
    margin-bottom: 20px;

    margin-left: 30px;
    margin-right: 30px;
    
  }
  }

`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
   
  }
`;
export const Pages = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  font-weight: 400;
font-size: 16px;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const Page = styled.a`
  color: rgb(219 234 254);
  display: block;
  font-weight: 600;
  padding-bottom: 2px;
  text-decoration: none;
  &.hover {
    color: rgb(147 197 253);
  }
  margin: 12px 0px;
  @media (min-width: 1024px) {
    margin: 0px 28px;
  }
`;

export const Subscribe = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;

  color: #ffffff;
`;

export const SecondRow = styled.div`
   display: flex;
  flex-direction: column-reverse;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    /* width: 100vw;
    margin-top: 20px;
    margin-bottom: 20px;

    margin-left: 112px;
    margin-right: 112px; */
  }
  a{
  text-decoration: none !important; 
  color: white;
}
  .soc{
    height: 30px;
    width: 60px;
    color: white;
  font-size: 20px;
  padding: 10px;
  }

  .law{
    display: flex;
    flex-direction: column;
    font-weight: 400;
font-size: 15px;
    @media (min-width: 1024px) {
    flex-direction: row;
    align-items: left;
  }


  }

  .social{
    margin-top: 20px;
    margin-bottom: 20px;

    @media (min-width: 1024px) {
      margin-top: 0px;
    margin-bottom: 0px;
    /* margin-left: 20px; */
   
  }
  }
  .terms{
    display: flex;
    flex-direction: row;
    justify-items: center;
    /* justify-content: space-between; */

  }
  .term{
    margin-right: 20px;
  }
  .privacy{
    margin-left: 20px;
  }
  .copy{
    margin-top: 20px;
    margin-bottom: 20px;
    @media (min-width: 1024px) {
      margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 20px;
  }

  }
`;


export const Input = styled.input`
  width: 278px;
  height: 45px;

  background: #ffffff;
  border: 1px solid #d6d6d6;
  box-sizing: border-box;
  border-radius: 4px;
`;


export const SubscribeButton = styled.button`
  width: 46.5px;
  height: 48px;
  left: 232px;
  top: 47px;

  background: #252525;
  color: white;
  border-radius: 8px 8px 0px 0px;
`;

