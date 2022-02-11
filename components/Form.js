import styled from "styled-components";
import { useState } from "react";
import { FormWrapper } from '../style/formstyle'
import axios from "axios";
import Card from "./Card";


export default function Form() {
    const [input, setinput] = useState('')
    const [link, setLink] = useState([])
    const [disable, setDisable] = useState(true)
    const [loading, setLoading] = useState(false)
    const [state, setstate] = useState([])



    const inputChange = (e) => {
        console.log(e.target.value)
         
        setinput(e.target.value)

     validURL(e.target.value)
    }
    
    const validURL = (string) => {
        const pattern = new RegExp(
   (/((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,"Please enter a valid url")

        );
        // let isValidURL =!(pattern.test(string));
        // console.log(isValidURL)
        if(!!(pattern.test(string))){
             setDisable(false)
            //  setinput('enter valid url')
             console.log('res is positive')
        }
        else{
            setDisable(true)
            console.log('res is negative')
        }
        // let isValidURL = !!pattern.test(string);
        // if (isValidURL !== true) {
        //   setDisable('disabled');
        // } else {

        //   setDisable('');
        // }
        
      };



    const handelSubmit = async (e) => {
        // setLoading(true);
        // setLoading("true")
        
        axios.get(`https://api.shrtco.de/v2/shorten?url=${input}`)
            .then((res) => {
                console.log(res)
                    // setLink(res.data.result.full_short_link) ;
                setLink([res.data.result.full_short_link, res.data.result.original_link]);
            }).catch((e) => {
                alert(`you type wrong url${e.message}`)

            })
        setstate([...state,link])
      
        setLink('');
        setDisable(false)
        

        e.preventDefault()




    };
    // 

    return (
        <>
            <FormWrapper state={state}>
                <form action="#" onSubmit={handelSubmit}>
                    <input type="text" name="search" value={input} onChange={inputChange} placeholder="You can Shortern a link here" />
                    <button type="submit" onClick={handelSubmit}  required ="please a url"class="btn">Shortern it!  </button>
                
                    
                </form>

                </FormWrapper>
                
               <Card state ={state}/>
                
                

        </>
    )
}

