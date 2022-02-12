import { Containerdiv} from "../style/featurestyle"
import Figure from "./Figure"
import Form from "./Form"
// import Form2 from "./form2"



export default function Features({state}) {
    return (
        <Containerdiv>
           <div> <Form/></div>
           {/* <div>{style}</div> */}



       
        <div><h2>Advance statics</h2>
           <p>"Track how your link are performing across the web",<br/>
           "our advance statics board."</p></div>  
           <div className = "griddiv">
             <div className ="inner">  
              <Figure/>
                 <h3>Brand Recognition</h3>
                 <p>"Bost your brand recognition with each click.Generic link dont't mean a thing.
                     Branded link help instil confidence in your content"
                 </p>
             </div>  
             <div className="inner">
                 <Figure/>
                 <h3>Detailed Record</h3>
                 <p>"Get insite of  who is clicking your Link.knowing whwn and where people engage with your content 
                     help inform better decision"</p></div>  
              
              
             <div className ="inner">
                 <Figure/>
                 <h3>Fully Customizable</h3>
                 <p>"Improve brand awareness and content discoverability through 
                     customizable link,supercharging audience engagement.""
                     </p>
                     </div>  
               
              
            </div>  
            

        </Containerdiv>
    )
}
