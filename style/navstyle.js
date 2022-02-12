import styled from 'styled-components' 
 export const Containerdiv =styled.div`
 margin-top:3px;
 height:50px;
 position:sticky;
background-color:white;
color:black;
display:flex;
align-items:center;
padding:0 100px;
font-size:18px;


// justify-content:space-between;
a:-webkit-any-link {
    color:grey;
    cursor: pointer;
    text-decoration: none;
    
}
& .shortly{
    margin-top: 15px;
    font-size: 3rem;
    font-weight: bold;
    margin-right: 23px;
    color:black;
}



`;

export const List = styled.li`
display:inline;
margin-right :30px;
font-size:14px;
color:lightgrey;
 cursor:pointer;
 margin-left: 54px;
    font-size: 17px;
    color: darkgrey;
    font-weight: bold;

 & .line{
     display:none;
 }  
}
    @media(max-width:375px){
        .navstyle{
            display:none;
        }
    }

    .hanburger{
        display:flex;
        flex-direction:column;
        width:25px;
        height:20px;
        curser:pointer;
    }
    .line{
     width:100%
     height:3px;
     background-color:white;

    }
`;

// export const no =  styled(Container)``;

// @media(max-width:375px){
//     margin-left: 29rem;
//     display: grid;
//     justify-items: end;
//     margin-top: 3rem; 
//    align-self: center;
// }//  & .shortly{
     
//     font-size: 2rem;
//     font-weight: bold;
//     margin-right: 23px;
// }