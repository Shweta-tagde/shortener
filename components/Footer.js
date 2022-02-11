import  {FooterWrap}from '../style/footerstyle'
import Link from 'next/link'
import Image from 'next/image'
import Footerlist from './Footerlist'
import Sociallink from '../style/Sociallink'
import { focontainer } from '../style/footerliststyle'
import { social } from '../style/socialstyle'

export default function Footer() {
    return (


        <FooterWrap>
            <div class ="logo">
              {/* <Image></Image> */}
            </div>
            <Footerlist/>
            <Sociallink/>
            
            
        </FooterWrap>
    )

}
