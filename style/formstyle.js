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

@media(max-width:375px){
      // margin-left: 6rem;
      // margin-top: -2rem ; 
      height:15rem;
      width: 39rem;
    margin-left: 8rem;
    margin-top: -3rem

      
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
           
            margin-left:22rem;
           margin-top: 4rem;

      
      }

      @media (max-width:1440px){
         width:34rem;
        margin-left:2px;
  
          }
          
 }
  @media (max-width:376px){
      // margin-top: 0rem;
      // margin-left:0rem;
      margin-left: 6rem;
        width: 41rem;
       height: 15rem;

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
      
      @media(max-width:376px){
            margin-left:5rem;
             width: 34rem;
             margin-right:21rem;
      }
      @media(max-width:1283px){
        margin-left:23rem;
        margin-top:1rem;
      }
     
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


       

     

    