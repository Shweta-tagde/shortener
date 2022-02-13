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
              {/* <Image src={'/img/logo.svg'}  width="50px" height ="50px"/> */}
              <div className="short">Shortly</div>
            <div className ="footerlogo">
               <div className="space"> <Image src={'/img/icon-facebook2.svg'} width='50px' height='50px'/>  </div>
               <div className="space"><Image src={'/img/icon-pinterest2.svg'} width='50px' height='50px'/> </div>
               <div className="space"> <Image src={'/img/icon-twitter2.svg'} width='50px' height='50px'/> </div>
               <div className="space"> <Image src={'/img/icon-instagram2.svg'} width='50px' height='50px'/>  </div>
               
            </div>
            </div>
            <Footerlist/>
            
            
            
        </FooterWrap>
    )

}
