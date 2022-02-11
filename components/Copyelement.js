import React from 'react'
import {CopyToClipboard} from "react-copy-to-clipboard"
import { useState } from 'react'

export default function Copyelement({data}) {
const [state, setstate] = useState("copy")

const word = state
console.log(data)
const Data = data[0]
 return (
        <span>
        <CopyToClipboard text ={Data} >
         <button onClick= {()=>{setstate("copied")  }}> 
          {word} 
         </button>  
         
        
            
        </CopyToClipboard>
        </span>
    )
}
