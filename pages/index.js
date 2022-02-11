import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/intro'
import Features from '../components/Features'
import Booklink from '../components/Booklink'
import GlobalStyle from '../style/globalStyle'

export default function Home() {
  return (
    <div >
   <GlobalStyle/>
      <Head>
        <title>SHORTENER</title>
        <meta name="description" content="created url shortener easy to use" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      
     <Intro/>
     <Features/>
    <Booklink/>
    </div>
  )
}
