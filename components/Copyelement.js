import React from 'react'
import {CopyToClipboard} from "react-copy-to-clipboard"
import { useState } from 'react'
import { Button } from '../style/copybuttonstyle'

export default function Copyelement({data}) {
const [state, setstate] = useState("copy")
const word = state
const d1 = data[0]
console.log(data)
return (
<span>
{
data.map((Element)=>{
let  a = Element[0];
console.log(a)
       return (  
      <CopyToClipboard  text={a} >
            
       <Button onClick= {()=>{setstate("copied")  }}> 
        {word} 
       </Button>
       
       </CopyToClipboard> 
       
       
       )

    })


    }
 </span>
 

)
}























{/* {/* 
        <CopyToClipboard text ={d1} >
            
             <Button onClick= {()=>{setstate("copied")  }}> 
              {word} 
             </Button>  
             </CopyToClipboard>
            </span>  */}

            {/* /*  */}
         {/* data.map((Element, index)=>{
             <span key={index} >
        
         <CopyToClipboard text ={Element[0]} >
          <Button onClick= {()=>{setstate("copied") }}> 
          <button type="button"> 
           {word} 
          </button>  
         
        
            
        </CopyToClipboard>
     </span> 

         })
        
    ) */}
{/* }  */}













