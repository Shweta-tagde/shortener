
import { useState } from "react";
import React from "react";
import { FormWrapper} from '../style/formstyle'
import axios from "axios";
import Card from "./Card";
import isURL from 'validator/lib/isURL';



export default function Form() {
    const [input, setinput] = useState('')
    const [link, setLink] = useState([])
    const [disable, setDisable] = useState(false)
    const [loading, setLoading] = useState("false")
    const [err, seterr] = useState("You can Shortern a link here")
    const [state, setstate] = useState([])
    const [place, setplace] = useState('You can Shortern a link here')



    const inputChange = (e) => {
        setinput(e.target.value)


        checkLink(input)
     

      
        // if (isURL(input)) {
        //     seterr('valid url');
        //     setDisable(false)
        //     console.log(err)
        //  } else {
        //     seterr('please enter valid url');
        //     setDisable(true)
        //     console.log(err)
        //  }

 }

    const HTTP_URL_VALIDATOR_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

    const checkLink = (string) => {
        // Regex to check if string is a valid URL
        const b= ((string+ " ").match(HTTP_URL_VALIDATOR_REGEX))
        
        if(b){
          setDisable(false)
          console.log(disable)
        }
        else{
//    setDisable(true)
   
   console.log(disable)
    
        }
    
};


const handelSubmit = async (e) => {
      
        setLoading("true")
        
        axios.get(`https://api.shrtco.de/v2/shorten?url=${input}`)
            .then((res) => {
                console.log(res)
              
         setLink([res.data.result.full_short_link, res.data.result.original_link]);
            }).catch((e) => {
                setplace("Enter a VAlid URL")
                alert(`you type wrong url${e.message}`)
                
                
            })
        setstate([...state,link])
        console.log(setLink)
      
        setLink('');
        setinput('')
        setplace('"You can Shortern a link here"')
        // setDisable(false)
        

        e.preventDefault()




    };
    // 

    return (
        <>
            <FormWrapper state={state}>
                <form action="#" onSubmit={handelSubmit}>
                    <input type="text" name="search" value={input} onChange={inputChange} placeholder={place}  required ="Please enter a valid url"/>
                    <button type="submit" disabled ={disable} className= "btn" onClick={handelSubmit}  >Shortern it!  </button>
                    {/* <p>{err}</p> */}
                    
                </form>

                </FormWrapper>
                
               <Card state ={state}/>
                
                

        </>
    )
}










