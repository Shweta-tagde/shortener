 import  {Focontainer } from '../style/footerliststyle'
 import { FooterWrap } from '../style/footerstyle'
import Link from 'next/link'
import Image from 'next/image'
export default function Footerlist() {
    return (
        <Focontainer>
        <ul>
            <h3>Features</h3>
            <li><Link href="/"><a>Link Shortening</a></Link></li>
            <li><Link href="/"><a>Branded Links</a></Link></li>
            <li><Link href="/"><a>Analytics</a></Link></li>
        </ul>
        <ul>
            <h3>Resources</h3>
            <li className="two"><Link href="/"><a>Blog</a></Link></li>
            <li className="two"><Link href="/"><a>Developers</a></Link></li>
            <li className="two"><Link href="/"><a>Support</a></Link></li>
        </ul>
        <ul className="about">
            <h3>About</h3>
            <li className="three"><Link href="/"><a>Out Team</a></Link></li>
            <li className="three"><Link href="/"><a>Careers</a></Link></li>
            <li className="three"><Link href="/"><a>Contact</a></Link></li>
        </ul>


       <div className='endlogo'>
         <span className="space"> <Image src={'/img/icon-facebook2.svg'} width='50px' height='50px'/>  </span>
        <span className="space"><Image src={'/img/icon-pinterest2.svg'} width='50px' height='50px'/> </span>
         <span className="space"> <Image src={'/img/icon-twitter2.svg'} width='50px' height='50px'/> </span>
      <span className="space"> <Image src={'/img/icon-instagram2.svg'} width='50px' height='50px'/>  </span>
    </div>










    </Focontainer>
    )
}
