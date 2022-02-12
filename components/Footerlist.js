 import  {Focontainer } from '../style/footerliststyle'
import Link from 'next/link'
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
            <li><Link href="/"><a>Blog</a></Link></li>
            <li><Link href="/"><a>Developers</a></Link></li>
            <li><Link href="/"><a>Support</a></Link></li>
        </ul>
        <ul>
            <h3>About</h3>
            <li><Link href="/"><a>Out Team</a></Link></li>
            <li><Link href="/"><a>Careers</a></Link></li>
            <li><Link href="/"><a>Contact</a></Link></li>
        </ul>
    </Focontainer>
    )
}
