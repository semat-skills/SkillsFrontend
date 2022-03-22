import React from 'react'
import styled ,{css}from 'styled-components';
import { webColors } from '../../styles/thems';
import px2vw from "../../styles/px2vw";


// interface FooterStyleProps {



// }



export const FooterStyle = styled.footer`

position: relative;
background: rgb(29 78 216);
padding-top: 8px;
padding-bottom: 6px;


max-width: auto;
padding-left: 4px;
padding-right: 4px;

display: flex;
flex-wrap: wrap;
text-align: center;


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
    &.hover{
        color: rgb(147 197 253);
    }
    margin: 20px 0px;
    @media (min-width: 1024px) {
  
    margin: 0px 28px;
    }

`;

export const Subscribe = styled.div`
   font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 22px;
/* line-height: 26px; */
/* identical to box height */

/* letter-spacing: -0.3px; */

color: #FFFFFF;

`;

export const SecondRow = styled.footer`


`;

export const SocialMedia = styled.footer`


`;


export const Input = styled.input`
   width: 278px;
height: 45px;
left: 0px;
top: 50px;

/* White */

background: #FFFFFF;
/* Grayscale/Dividers + Borders */

border: 1px solid #D6D6D6;
box-sizing: border-box;
border-radius: 4px;

`;

export const SecondRow1 = styled.footer`


`;

export const SubscribeButton= styled.button`
    width: 46.5px;
height: 48px;
left: 232px;
top: 47px;

background: #252525;
color: white;
border-radius: 8px 8px 0px 0px;

`;

export const SocialMedia1 = styled.footer`


`;


export const Subscribe12 = styled.div`
   

`;

export const SecondRow12 = styled.footer`


`;

// width: 100%;
// height:${px2vw(503)};
// margin:0px;
// left: 0px;
// right: 0px;

// top: ${px2vw(2544)};
// background-color: ${webColors.color1};