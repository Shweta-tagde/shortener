  import { Containerdiv,List } from  '../style/navstyle'
  import Link from 'next/link'
 

export default function Navbar() {
return (
        <Containerdiv>
        <Link href="/">Shortly</Link>
        <ul>
        <List><Link href="/products/design"> FEATURES</Link></List>
        <List><Link href="/products/development">PRICING</Link></List>
        <List><Link href="/products/production">RESOURCES</Link></List>
        
        </ul>
        </Containerdiv>
    );
}
