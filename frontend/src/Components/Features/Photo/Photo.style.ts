import styled from 'styled-components';
import px2vw from '../../styles/px2vw';
import { webColors } from '../../styles/thems';


export const Photo = styled.div`
background-color: green;

width: 181.62px;
height: 181.62px;
left: 78px;
top: 517px;
border-radius:50%;
margin: 16px;
margin-left: auto;
margin-right: auto;

@media (min-width: 1024px){
    width: 256.22px;
height: 260px;
left: 41px;
top: 478px;
}
`;