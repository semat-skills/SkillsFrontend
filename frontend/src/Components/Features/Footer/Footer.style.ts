import React from "react";
import styled from "styled-components";
import { webColors } from "../../styles/thems";

// interface FooterStyleProps {

// }

export const FooterStyle = styled.footer`
     display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* padding-top: 25px;
  padding-bottom: 25px; */

  position: relative;
  background: rgb(29 78 216);
  padding-top: 8px;
  padding-bottom: 6px;

  /* width: 100%; */ //to check
  /* max-width: auto; */
  padding-left: 4px;
  padding-right: 4px;

  @media (min-width: 1024px) {
    text-align: left;
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
  }

  .soc{
    height: 20px;
    width: 50px;

    color: #70726F;
    background-color: white;
  font-size: 20px;
  padding: 10px;
  /* border-right: 1px solid #70726F; */
  transition: all .5s ease;
  }

  .law{


  }

  .social{

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

