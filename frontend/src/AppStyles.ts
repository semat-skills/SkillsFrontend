import styled from "styled-components";
import tw from 'tailwind.macro';
declare module 'tailwind.macro'

// export const AppStyles = styled.div.attrs({
//   className: "w-full h-screen flex flex-col items-center justify-center"
// })`
// & {

// }
export const AppStyles = styled.div.attrs({
  className: "w-full h-screen flex flex-col items-center justify-center"
})`
  & {
    h1 {
      ${tw`font-sans-serif text-6xl font-hairline text-6xl text-teal-500`}
      transform: scale(1);
      transition: all 0.3s ease-in-out;
   }
    h1:hover {
    transform: scale(2);
  }
}
`;



// `;
//export default AppStyles;