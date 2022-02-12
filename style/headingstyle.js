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

@media (max-width:380px){
h1{
    margin-top: 7rem;
    text-align: center;
    margin-left: 7rem;
    width: max-content;
}

}
`;
