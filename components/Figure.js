import Image from "next/image"
import { Container } from "../style/figurestyle"
export default function Figure() {
    return (
        <Container>
    {/* background-image:url("/images/bg-shorten-desktop.svg"); */}
      {/* <Image src={'/img/icon-brand-recognition.svg'}  width="40px" height="40px"/> */}
     <Image classname="image" src={'/img/icon-brand-recognition.svg'} width="34px" height = "40px"  margin="10px"/>
         {/* <div> image are here</div> */}
           
    </Container>
    )
}
