import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/intro'
import Features from '../components/Features'
import Booklink from '../components/Booklink'
import GlobalStyle from '../style/globalStyle'
import Footer from '../components/Footer'
import Navbar from  '../components/Navbar'
import  Containerind from '../style/indexcontainer'
import Heading from '../components/heading'
// import Enclosed from '../components/Enclosed'
import { Enclosediv } from '../style/Enclosestyle'


export default function Home() {
  return (
    <div >
   <GlobalStyle/>
      <Head>
        <title>SHORTENERR</title>
        <meta name="description" content="created url shortener easy to use" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Navbar/>
     <Enclosediv> 
      
     <Heading/>
     <Features/>
    <Booklink/>
    <Footer/>
     
    </Enclosediv>
  </div>
  )
}
