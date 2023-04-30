import axios from "axios";

// global method to fetch the data

const BASE_URL="https://api.themoviedb.org/3";
const TMDB_TOKEN=import.meta.env.VITE_APP_TMDB_TOKEN; // syntax is for vite env variables access

// refer to https://apipheny.io/api-headers/ to know more about api headers
const headers={
      Authorization: "bearer "+TMDB_TOKEN,
}

const fetchData=async(url,params)=>{
  try{
     const {data}=await axios.get(BASE_URL+url,{
      headers,  
      params,
     })
    //  console.log(data);
     return data; 
  }
  catch(error){
      console.log(error);
      return error;
  }
}
export default fetchData;