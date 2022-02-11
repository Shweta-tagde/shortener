import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:auto;
//  background:no-repeat 50% url('./images.jpg');
//   margin-botton:10rem;
display:flex;
flex-direction:column;


div{
    flex:1;
    padding:100px;
    paddin-right:0;
}
 h1{
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.1;
    color:black;
}
span {
    color:green;
}
p{
    font-size:20px;
    margin-top:20px;
}
button{
    border: none;
    background-color:green;
    color:white;
    font-weight:bold;
    width:100px;
    padding:20px
}
`;