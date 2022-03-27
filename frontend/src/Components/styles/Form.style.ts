import styled from 'styled-components';

export const MyForm = styled.div`
max-width: 511px;;

.center {
    display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 25px;

  @media (min-width: 1024px) {
    justify-content: left;
   align-items: flex-start;
  }
}

p {
  color: #b3b3b3;
  font-weight: 300; }

.input-text{
    /* width: 100vw; */

    background: #FFFFFF;
/* Grayscale/Dividers + Borders */
padding: 12px 16px;
/* right: 5px;;
margin-left: 5px; 
 margin-right: 5px; */
border: 1px solid #D6D6D6;
box-sizing: border-box;
border-radius: 4px;
}
.inputDiv{
    display: flex;
    flex-direction: column;

    margin-bottom: 15px;
}

a{
  text-decoration: none !important; 
}

.check-text{
  display: flex;
  flex-direction: row;
}
.terms{
  margin-left: 5px;;
}
.password{
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
   width: auto;

  }
}
`;

