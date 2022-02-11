import styled from "styled-components";

export const FormWrapper = styled("div")`
position:relative;
background-image:url("/images/bg-shorten-desktop.svg");
background-repeat:no-repeat:
background-size:cover;
background-color:#3b3054;
padding:5rem 6rem;
display:flex;
justify-content:center;
width:100%;
border-radius:10px;


input{
      flex:0 0 80%;
      padding:1.5rem 3rem;
      border:none;
      outline:none;
      font-size:1.6rem;
      border-radius:10px;
      margin-right:1.5rem;
      cursor:pointer;
      width:50rem;
      
      }

button{
            cursor: pointer;
            font-size: 1.6rem;
            background-color: #2acfcf;;
            color: #fff;
            padding: 1.5rem 3.5rem;
            align-self: flex-start;
            border-radius: 10px;
            border: none;
            outline: none;
            font-weight: 700;
            transition: brightness 0.2s ease 0s;
            @media (min-1266px){
              margin-left:23rem;
            }
            button:disabled{
                  background-color:red;
            }
            button:enabled{
                  background-color:blue;
            }
        }
        *, :after, :before {
            margin: 0;
            padding: 0;
            -webkit-box-sizing: inherit;
            box-sizing: inherit;  
      }

      @media(min-1266){
         input {  margin-left: 133px;
            margin-bottom: 27px;
           }
           button{
                 margin-right:23rem;
           }

`;

     

    