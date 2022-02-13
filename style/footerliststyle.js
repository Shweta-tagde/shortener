import styled from 'styled-components'
 export const Focontainer = styled.div`
 display: flex;
//  -webkit-box-pack: justify;
 justify-content: space-between;
  
 .endlogo{
     display:none;
 }
 

@media(max-width:376px){

  
 flex-direction: column;
align-items: center;
row-gap:93px;
line-height:33px;
margin-top: 3rem;
h3{

    font-size: 28px;
    margin-bottom: 16px;
    margin-left: 1rem;
}

 .endlogo{
     display:block;
 }

.about{
    // margin-left: -4rem;
}
li{
    font-size: 26px;
    color:darkgrey;
    list-style: none;
    
}

.two{
    margin-left: 36px;
}
.three{
    margin-left: 14px;
}
    
}


 


`;