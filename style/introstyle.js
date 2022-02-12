import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:auto;
  background:no-repeat 50% url('/img/people working.svg');
  background-size:contain;
// background-image:url("/images/bg-shorten-desktop.svg");
//   margin-botton:10rem;
display:flex;
flex-direction:column;
// margin-top: 9rem;
     height: 21rem;
}
@media (max-width:(380px)){

    width:48rem;
}


div{
    flex:1;
    padding:100px;
    paddin-right:0;
}
 h1{
    font-size: 21px;
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
