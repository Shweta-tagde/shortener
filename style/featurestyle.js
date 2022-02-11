import styled from 'styled-components'


 export const Containerdiv =styled.div`
 
 display:flex;
 flex-direction:column;
 
//  background:url('');
 

 & .griddiv {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.5rem;
    opacity:1;
    margin-bottom: 88px;
    margin-top: 6rem;
    
}

&  .inner{
  border: 2px solid grey;
  border-radius: 11px;
}



  }

  & .griddiv p{
    color: #bfbfbf;
    font-size: 1.6rem;
    text-align:"center";
  }

//   @media (min-width: 43.8125em)

//   & .notfirst::after {
//       content: "";
//       position: absolute;
//       top: 50%;
//       right: 100%;
//       height: 5px;
//       width: 3.5rem;
//       background-color: var(--primary-cyan);
//   }

  h2 {
    text-align:center;
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    font-size: 2.6rem;
    font-weight: 700;
    letter-spacing: 1px;
    color:#35323e;
}
h3{
  text-align:center;
}
p{
  text-align:center;
  color: #bfbfbf;
  font-size: 1.6rem;
}

 `;


