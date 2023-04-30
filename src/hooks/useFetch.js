
// custom hook for fetching 
// custom hooks are functions declared with use and should return something not a JSX element
import fetchData from '../utils/api';
import { useEffect, useState } from "react"

// rules are simple: must be declared using use and not return a JSX element.
const useFetch=(url)=>{
      const[data,setData]=useState(null);
      const[loading,setloading]=useState(false);
      const[error,setError]=useState(null);

      const fetchRequiredData=async()=>{
            try{
                  const response= await fetchData(url);
                  setData(response);
                  setloading(false);
            }
            catch(error){
                  setError("Something went wrongg");
            }
      }

      useEffect(()=>{
            fetchRequiredData();
      },[url])

      return {data,loading,error};
}
export default useFetch