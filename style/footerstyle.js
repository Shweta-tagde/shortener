import styled from 'styled-components'
 export const FooterWrap =styled.div`

 display:grid;
      grid-template-columns:1fr 2fr 1fr;
      grid-column-gap:10rem;
      padding:7rem 10rem 10rem;
      background-color:var(--color-quinary);
      color:var(--color-white);
      & .logo{
      	width:120px;
      	height:100%;
		fill:#fff;
	-webkit-fill:#fff;
		}
      
    `;

        