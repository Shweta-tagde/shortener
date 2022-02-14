import styled from 'styled-components'
// import { mediaQry } from '../components/Media';

 export const Containerdiv =styled.div`
 
 display:flex;
 flex-direction:column;
background-color:#E6EDf5;


& .griddiv{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.5rem;
    opacity:1;
    margin-bottom: 88px;
    margin-top: 6rem;
    margin-right: 15px;
    margin-left: 15px;
    height: 11rem;


    @media(max-width:376px){
      grid-template-columns:1fr;
      width: 41rem;
    height: 42rem;
    margin-left: 9rem;
    margin-top: 2rem;
    
    }
    
  }


&  .inner{
   background:white;
  border-radius: 11px;
  @media(max-width:376px){
    // width: 36rem;
    // margin-left: 7rem;
    height: 12rem;
    padding: 13px;
  }
  
  }

  & .griddiv p{
    color: #bfbfbf;
    font-size: 1.4rem;
    text-align:"center";
  
}

  
// p {

// ${mediaQry.greaterThan("43.8125em")`
//         :not(:first-child)::after {
//       content:"hello";
//       position:absolute;
//       top:50%;
//       right:100%;
//       height:5px;
//       width:3.5rem;
//       background-color:blue;
//        }

//        ${mediaQry.lessThan("tablet-small")`
//        :not(:last-child)::after {
//          content:"hello";
//          position:absolute;
//          top:100%;
//          right:50%;
//          height:3.5rem;
//          width:5px;
//              background-color:blue;
//              }
//              text-align:center;
               
//        `}
 
// `}

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
  @media (max-width(375px)){
    padding: 10rem 2rem 20rem;
    width: fit-content;
}
  

 `;


