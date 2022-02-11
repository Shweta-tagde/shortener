import styled from 'styled-components' 
 export const Containerdiv =styled.div`
 height:50px;
 position:sticky;
background-color:black;
color:white;
display:flex;
align-items:center;
padding:0 100px;
font-size:18px;
// justify-content:space-between;
a:-webkit-any-link {
    color:white;
    cursor: pointer;
    text-decoration: none;
    
   
}
`;

export const List = styled.li`
display:inline;
margin-right :30px;
font-size:14px;
color:lightgrey;
 cursor:pointer;
`;

// export const no =  styled(Container)``;