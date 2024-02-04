// we are creating this hook to make things better and make code small and efficeint 
import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY }`


const useGif = (tag) =>
{
    const[gif,setGif ] = useState()
    const[loadeing , setLoader] =useState("false")
   
    async function fetchData ()
    {
        setLoader(true)

        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY }`;  // ye randoom gif ki api hai 

        const {data} = await axios.get(tag ?`${url}&tag=${tag}` :url);  // yeh new tarike se hum api call krrheb hai  & isme hum yeh new tarika kiya hai random ya tag wale meme ke liye 

        const imgSrc = data.data.images.downsized_large.url;  // yha se hum img ka source nikal rhe hai 

        setGif(imgSrc); // iss imagsrc ko ab hum state variable me setgi se dalnege jisse at every render wo ui pr dikhega 

        console.log(imgSrc)

        setLoader(false);

        // humne hook ka use krke bhot ache se or chote time ke isko  bnaya 

    }

    useEffect( () => {
        fetchData();
    },[])

    function clickHandler ()
    {
       fetchData();
    }
    
    return{gif,loadeing,fetchData};
}

export default useGif;