import { card } from "../style/cardstyle"
import Copyelement from "./Copyelement"

export default function Card({state,setstate}) {
    return (
        <card>
                {state.map((list,index)=>{ 
                    return(
                 <div>
                     <span>{list[0]}</span>
                 <div>{list[1]}</div>
                 {/* <button>copied</button> */}
                  <Copyelement data={state}   /> 
                 
                 
                 </div>
                    ) 
                })}
               </card>
    )
}
