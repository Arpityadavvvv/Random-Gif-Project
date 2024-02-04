import React, { useState,useEffect } from "react"
import axios from "axios";
import useGif from "./useGif";
import Loader from "./Loader";

import Tag from "./Tag";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;




// 0cgf3mv7BWV3SvjHg192L9cpDAwYQ6sQ

const Random = ()=>
{
    // const[gif,setGif ] = useState('')
    // const[loadeing , setLoader] =useState("false")
   
    // async function fetchData ()
    // {
    //     setLoader(true)

    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY }`;  // ye randoom gif ki api hai 

    //     const {data} = await axios.get(url);  // yeh new tarike se hum api call krrheb hai 

    //     const imgSrc = data.data.images.downsized_large.url;  // yha se hum img ka source nikal rhe hai 

    //     setGif(imgSrc); // iss imagsrc ko ab hum state variable me setgi se dalnege jisse at every render wo ui pr dikhega 

    //     console.log(imgSrc)

    //     setLoader(false);

    // }

    // useEffect( () => {
    //     fetchData();
    // },[])

    function clickHandler ()
    {
       fetchData();
    }

    // ab hum us hook ki help se yha se data nikal rhe hai

    const {gif,loadeing,fetchData} = useGif(Tag);
    
    // this below code is called JSx code , this can't be copied in any hook creation 
    return(
        <div className="flex flex-col bg-purple-300   mt-[25px] gap-y-5 border border-teal-200 min-h-[250px] min-w-[400px] ">
            <h1 className="text-center mt-[15px] font-semibold">Random gif</h1>

            {loadeing ? (<Loader></Loader>) : ( <img  className="mx-auto max-h-[150px]" src={gif} width="250"></img>)}
           
            <button className="w-[400px] max-w-[200px] mx-auto  bg-red-400 py-2 opacity-80 rounded-lg mb-[20px] " onClick={clickHandler}>Genrate</button>
        </div>
    )

}
export default Random;