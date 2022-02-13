import styled from "styled-components";
// import color from "./globalStyle"
export const Container =styled.div` 
 display:grid;
 grid-column: repeat(1,auto);
 margin-top:1rem;

div{
    flex:1;
    padding:100px;
    paddin-right:0;
}
 h1{
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.1;
    color:black;
    text-align:center;
    @media(max-width:376px)
    {
    margin-left: 1rem;
    margin-top: 3rem;
    }
    
}
span {
    color:green;
}

button{
    border: none;
    background-color:green;
    color:white;
    font-weight:bold;
    width:100px;
    padding:20px
}



}
`;
