import styled from "styled-components";

export const FormWrapper = styled("div")`
position:relative;
background:url("/img/Meteor.png");
background-repeat:no-repeat:
background-size:cover;
background-color:#3b3054;
padding:5rem;
display:flex;
margin-top:-3rem;
justify-content:center;
align-items:center;
width:80%;
height: 1rem;
    margin-left: 11rem;
//  margin-top:-2rem;
border-radius:10px;

@media(max-width:376px){
      height:15rem;
      width: 39rem;
    margin-left: 10rem;
    margin-top: -3rem;
//     justify-content: space-evenly;

      
}


input{
      
      // flex:0 0 80%;
      padding:1.5rem 3rem;
      border:none;
      outline:none;
      font-size:1.6rem;
      border-radius:10px;
      margin-right:1.5rem;
      cursor:pointer;
      width:40rem;

      @media(max-width:376px){

    

    margin-top: 0rem;
    margin-bottom: 19px
    width: 45%;
    margin-left: 22rem;
    float: right;
    margin-right: 21rem

     }

      @media (max-width:1440px){
         width:34rem;
        margin-left:2px;
  
          }
          
 }
 


button{
      cursor: pointer;
      font-size: 1.6rem;
      background-color: #2acfcf;;
      color: #fff;
      padding: 1.5rem 3.5rem;
      // align-self: flex-start;
      border-radius: 10px;
      border: none;
      outline: none;
      font-weight: 700;
      transition: brightness 0.2s ease 0s;

      :active{
        background:black;
        color:white;
      }
      
      @media(max-width:376px){
             width: 34rem;
             margin-right:21rem;
                  margin-left: 22rem;
                  margin-top: 3rem;
      }
      @media(max-width:1283px){
        margin-left:23rem;
        margin-top:1rem;
      }
     
} 
 place{
   color:red;
 }
    
 

 

// 
        }
      //   *, :after, :before {
      //       margin: 0;
      //       padding: 0;
      //       -webkit-box-sizing: inherit;
      //       box-sizing: inherit;  
      } 
     
`;


       

     

    