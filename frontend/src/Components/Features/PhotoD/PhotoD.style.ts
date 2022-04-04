import styled from 'styled-components';
import img1 from '../images/h4.jpg';


export const PhotoDiv = styled.div`
background-color: green;
background-image: url(${img1});
background-repeat: no-repeat;
background-size: cover;
width: 181.62px;
height: 181.62px;

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