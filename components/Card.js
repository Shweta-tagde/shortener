import {Stylecard}   from "../style/cardstyle"

import {CopyToClipboard} from "react-copy-to-clipboard"
import { useState } from "react"

import { Button } from '../style/copybuttonstyle'

 
 export default function Card({state}) {


const [newstate, setstate] = useState([])
 


     return (
         <Stylecard>


             {/* {state.length!=0? */}
             {
               state.map((Element,index)=>{
                 if(Element.length>0) {
                        return(
                     <div className="carddiv"  >
                         <div className="originalurl">{Element[1]}</div>
                     <div className="shorturl">{Element[0]}</div>
                     {/* <button>copied</button> */}
                      {/* <Copyelement data={state}   />  */}
                      
                      <CopyToClipboard  text= {Element[0]} 
                      
                      onCopy={() => {
                        const newArr = [...state];
                        newArr[index].copied = true;
                        setstate(newArr);
                      }}
                      >
            
              <Button  className="innerbtn"> 
               
               {state[index].copied ? "Copied!":"Copy"}
            </Button>
            
            </CopyToClipboard> 
                    
                          
 
      










                     
                     </div>
                        ) 
                   
                 }
                  

               }) 




               
// export default function Card({state}) {
//     return (

  
//         <Stylecard>
         


//              { state.map((list,index)=>{ 
//                     return(
//                  <div className="carddiv">
//                      <span>{list[1]}</span>
                     
                  
//                  <div>{list[0]}</div>
//                  {/* <button>copied</button> */}
//                   <Copyelement data={state}   /> 
                 
                 
//                  </div>
//                     ) 
//                })  }
               
//              </Stylecard>
//     )  
// }
 
             
             }
             
         </Stylecard>
     )
 }
 


