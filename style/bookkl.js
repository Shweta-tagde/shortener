import styled from "styled-components";
import color from "./globalStyle"
export const Container =styled.div`
   padding: 10rem;
    background-color: #3b3054;
    background:url("/img/Meteor.svg");
    color:white;

    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;

    h2 {
        font-size:3rem;
        color:white;
      margin-bottom:3rem;
    }
 & .bookbutton{
    
     height: 3rem;
    width: 10rem;
    border-radius: 23px;
    font-size: 22px;
    background: #2ACFCF;
    color: white;
    border-color: #2ACFCF
    cursor:pointer;
 }
  

 }
`;