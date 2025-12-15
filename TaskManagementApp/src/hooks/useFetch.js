import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data,setData] = useState();
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState();

useEffect(()=>{
const fetchData =  async() => {
    try{
        setLoading(true)
        const fetchUrl = await fetch(url);
        const response = await fetchUrl.json();
        setData(response)
        setLoading(false)
     }
    catch(err){
        setError(err)
        setLoading(false)
    }
    
};
fetchData();
},[url])
return {data,loading,error}
}
export default useFetch