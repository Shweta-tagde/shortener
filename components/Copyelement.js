import React from 'react'
import {CopyToClipboard} from "react-copy-to-clipboard"
import { useState } from 'react'
import { Button } from '../style/copybuttonstyle'

export default function Copyelement({data}) {
const [state, setstate] = useState("copy")

const word = state
console.log(data)
console.log(d2)
console.log(data)
 return (
        // data.foreach((element)=>{  
        // <span>
        //     <CopyToClipboard text ={element[0]} >
            
        //      <div onClick= {()=>{setstate("copied")  }}> 
        //       {word} 
        //      </div>  
        //      </CopyToClipboard>
        //     </span>   })
        data.map((Element, index)=>{
            <span key={index} >
        
        <CopyToClipboard text ={Element[0]} >
         <Button onClick= {()=>{setstate("copied") }}> 
          {word} 
          </Button>  
         
        
            
        </CopyToClipboard>
        </span>

        })
        
    )
}
