import  {FooterWrap}from '../style/footerstyle'
import Link from 'next/link'
import Image from 'next/image'
import Footerlist from './Footerlist'
import Sociallink from '../style/Sociallink'
// import { Focontainer } from '../style/footerliststyle'
// import { Social } from '../style/socialstyle'

export default function Footer() {
    return (


        <FooterWrap>
            <div className ="logo">
              <Image src={'/img/logo.svg'}  width="50px" height ="50px"/>
            
              
              
              <div className ="footerlogo">
                <Image src={'/img/facebook-vector.png'} width='50px' height='50px'/>  
                <Image src={'/img/twitter-2.png'} width='50px' height='50px'/> 
                <Image src={'/img/pinterest-brands.svg'} width='50px' height='50px'/> 
                <Image src={'/img/instagram-square-brands.svg'} width='50px' height='50px'/>  
               
            </div>
            </div>
            <Footerlist/>
            <Sociallink/>
            
            
        </FooterWrap>
    )

}
