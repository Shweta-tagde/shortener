import styled from 'styled-components'
 export const FooterWrap =styled.div`

 display:grid;
      grid-template-columns:repeat(2,auto);
      grid-column-gap:10rem;
      padding:7rem 10rem 10rem;
      background:black;
      color:white;
@media(max-width:376px){
  grid-template-columns: 1fr;
  
  }


& .logo{
  width:120px;
  height:100%;
  background:black;
  @media(max-width:376px){
    justify-self:center;

    } 
 
}

& .short{
  height: 2rem;
  font-size: 2rem;
  margin-bottom: 12px;
}

& .space{
  margin-right:1rem;
}

& .footerlogo{
  display:flex;
    background:black;
    width:10rem;
  
  justify-content: space-evenly;
  @media(max-width:376px){
    display:none;
    grid-template-columns: 1fr
  }
  

}

`;

        