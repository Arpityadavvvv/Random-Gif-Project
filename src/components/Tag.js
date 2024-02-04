import React from "react";

import Loader from "./Loader";
import axios from "axios";
import { useEffect, useState } from "react";
import useGif from "./useGif";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = ()=>
{
    const [tag , setTag] = useState('car');

    const {gif,loadeing,fetchData} = useGif(tag) // yha se hum humara data nikal rhe hai jo kaam aayga 


    //.............[ yha ke niche sb gayab hogya due to using and creating our own hook ]...............

    // const[gif,setGif ] = useState('') 
    // const[loadeing , setLoader] =useState("false")

    
    // async function fetchData ()
    // {
    //     setLoader(true)

    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;  // ye randoom gif ki api hai 

    //     const {data} = await axios.get(url);  // yeh new tarike se hum api call krrheb hai 

    //     const imgSrc = data.data.images.downsized_large.url;  // yha se hum img ka source nikal rhe hai 

    //     setGif(imgSrc); // iss imagsrc ko ab hum state variable me setgi se dalnege jisse at every render wo ui pr dikhega 

    //     console.log(imgSrc)

    //     setLoader(false);

    // }

    // function changeHandler (event)
    // {
    //     setTag(event.target.value)
    // }
    
    // useEffect( () => {
    //     fetchData();
    // },[])

    // function clickHandler ()
    // {
    //    fetchData();
    // }
   

    return (

    <div className="flex flex-col bg-blue-300  mt-[15px]  border border-teal-200 min-h-[250px] max-h-[280px] min-w-[900px] ">

        <h1 className="text-center font-semibold">Random {tag}</h1>

        {loadeing ? (<Loader></Loader>) : ( <img  className="mx-auto max-h-[130px]" src={gif} width="250"></img>)}

        <input type="text" onChange={(event)=>setTag(event.target.value)} value={tag} className="w-full  max-w-[250px] mx-auto text-center mt-[15px] rounded-lg"></input>

        <button className="w-[400px] max-w-[200px] mx-auto  bg-red-400  opacity-80 rounded-lg mb-[10px] mt-[15px]  "  onClick={()=>fetchData()}>Genrate</button>
    </div>
    )

}
export default Tag;