import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto"
  }
  :root {
      font-size: 1.67vw;

      @media (min-width: 768px) {
        font-size: 1.25vw;
      }

      @media (min-width: 1024px) {
        font-size: 1.11vw;
      }
    }

`;

export default GlobalStyle;
