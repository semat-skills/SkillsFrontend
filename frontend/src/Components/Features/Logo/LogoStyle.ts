import React from 'react'
import styled ,{css}from 'styled-components';
import { webColors } from '../../styles/thems';
import px2vw from "../../styles/px2vw";


interface HeaderStyleProps {

}


export const LogoDiv = styled.div`
background-color: ${webColors.color1};
/* width:  ${px2vw(140)}; */
width: 120px;
height:  ${px2vw(70)};
margin-left: 6.3vw;
margin-top: 0.3vh;

`;
