import styled from 'styled-components'
 export const Stylecard = styled.div`
 display: grid;
 grid-template-columns: repeat(1, 1fr);
 justify-item:center;
 
 grid-gap: 3.5rem;

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
    }
    
 })
`;