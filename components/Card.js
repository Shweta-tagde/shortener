import {Stylecard}   from "../style/cardstyle"
import Copyelement from "./Copyelement"

export default function Card({state}) {
    return (
        <Stylecard>
             { state.map((list,index)=>{ 
                    return(
                 <div className="carddiv">
                     <span>{list[1]}</span>
                     
                  
                 <div>{list[0]}</div>
                 {/* <button>copied</button> */}
                  <Copyelement data={state}   /> 
                 
                 
                 </div>
                    ) 
               })  }
               
             </Stylecard>
    )  
}
 
 
//  export default function Card({state}) {
//      return (
//          <Stylecard>

//              {state>0?
             
//              state.map((list,index)=>{ 
//                                     return(
//                                  <div className="carddiv">
//                                      <span>{list[1]}</span>
//                                  <div>{list[0]}</div>
//                                  {/* <button>copied</button> */}
//                                   <Copyelement data={state}   /> 
                                 
                                 
//                                  </div>
//                                     ) 
//                                })
             
//              : null}
             
//          </Stylecard>
//      )
//  }
 


