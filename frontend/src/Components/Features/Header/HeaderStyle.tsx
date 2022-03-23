import React from 'react'
import styled ,{css}from 'styled-components';
import { webColors } from '../../styles/thems';
import px2vw from "../../styles/px2vw";


interface HeaderStyleProps {

}


export const HeaderStyle = styled.header`
background-color: ${webColors.color3};
/* position: absolute; */
/* width: ${px2vw(375)}; */
width: 100vw;
/* width: 375px; */
height: ${px2vw(88)};
left: 0px;
right: 0px;
margin:0px;
padding: 0px;
/* top:${px2vw(-16)}  */
display: flex;
flex-direction: row;
justify-content: space-between;
`;
