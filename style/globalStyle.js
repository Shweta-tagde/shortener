 
import  styled, {createGlobalStyle} from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
  font-family: 'Poppins', sans-serif;
}`;

const Color = createGlobalStyle`
color{
--neutral-Gray: 	#bfbfbf;
 --neutral-Grayish-Violet: #9e9aa7;
 --neutral-Very-Dark Blue: #35323e;
 --Very-Dark-Violet: #232127;
 
--primary-Cyan: #2acfcf;
--primary-Dark Violet: #3b3054;
--secondary-Red: #f46262;

}`;


export default GlobalStyle;


