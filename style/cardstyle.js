import styled from 'styled-components'
import {Color} from '../style/globalStyle'
 export const Stylecard = styled.div`
 display: grid;
 grid-template-columns: repeat(1, 1fr);
 justify-item:center;
 
 grid-gap: 3.5rem;


 & .shorturl{
     color: #2acfcf;
     font-weight: 600;
     @media (max-width:375px){
        width: 16rem;
        font-size: 24px;
    
  
    }
}
     }
 }

 & .originalurl{
    font-weight: 600;
 }

 & .carddiv{
     display:flex;
     justify-content: space-evenly;
    
    width: 100%;
    background:white;
    height: 4rem;
    align-items: center;

 }
 @media (max-width:376px){

    .carddiv{
        flex-direction:column;
        width:54rem;
        height:8rem;
        
            margin-left: 3rem;
        
    }

})



`;