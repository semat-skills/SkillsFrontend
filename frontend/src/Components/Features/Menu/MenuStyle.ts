import React from 'react'
import styled ,{css}from 'styled-components';
import { webColors } from '../../styles/thems';
import px2vw from "../../draft/px2vw";


interface HeaderStyleProps {

}


export const MenuDiv = styled.div`
background-color: ${webColors.color5};
width:  ${px2vw(140)};
height: ${px2vw(70)} ;
margin-right: 6.3vw;
margin-top: 0.3vh;
`;