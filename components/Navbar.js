  import { Containerdiv,List } from  '../style/navstyle'
  import Link from 'next/link'
 

export default function Navbar() {
return (
        <Containerdiv>
          
        <div href="/" className="shortly">Shortly</div>
        <ul>
        <List className ="navlist"><Link href="/products/design"> FEATURES</Link></List>
        <List className ="navlist"><Link href="/products/development">PRICING</Link></List>
        <List className ="navlist"><Link href="/products/production">RESOURCES</Link></List>
        </ul>
         <div className="hanburger">
         <i className="fas fa-bars"></i>


         </div>
        </Containerdiv>
    );
}
