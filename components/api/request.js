import axios from 'axios'


export default  async function getlink(linkURL, link) {

    try{
const linkParameter  =`https://api.shrtco.de/v2/shorten?url=${link}`;
const res = await axios.get(linkParameter,{
    headers:{
        Accept:'application/json'
    },
});
console.log (res)
return res;
    }
    catch(e){
        console.log(`$(e) During fetching this link`)
    }
    
    
}
