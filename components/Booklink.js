import Button from "./Button"
import Link  from 'next/link'
import { Container } from "../style/bookkl"
 
export default function Booklink() {
    return (
		<Container>
			<h2>Book Your Links Today</h2>
			{/* <Button 
         name="Get started" 
         bgcolor="true" 
         padding="1rem 3rem" 
         hover="true"
      /> */}
      <button className="bookbutton">Get started</button>
		</Container>
	)
        
    
}
