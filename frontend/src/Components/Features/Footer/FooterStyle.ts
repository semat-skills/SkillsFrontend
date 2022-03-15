import React from 'react'
import styled ,{css}from 'styled-components';
import { webColors } from '../../styles/thems';
import px2vw from "../../styles/px2vw";


// interface FooterStyleProps {



// }



export const FooterStyle = styled.footer`


position: absolute;
/* width: ${px2vw(374)}; */
width: 100%;
height:${px2vw(503)};
margin:0px;
left: 0px;
right: 0px;
top: ${px2vw(2544)};
background-color: ${webColors.color1};
`;
// export const FooterStyle: React.FC<FooterStyleProps> = ({}) => {
//         return ();
// }

// font-size: ${px2vw(18)};


// position: absolute;
// width: ${px2vw(374)}374px;
// height:${px2vw(18)} 503px;
// left: 0px;
// right: 0px;
// top: ${px2vw(18)}2544px;
// background-color: ${webColors.color1};
// `;