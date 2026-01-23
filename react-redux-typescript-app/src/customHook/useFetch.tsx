import { useEffect, useState } from "react";

export interface UseFetchResult<I>{
    data : I | null,
    error: string | null
    loading: boolean
}

export const useFetch = <I,> (url:string):UseFetchResult <I>=> {

    const[data,setData] = useState<I | null>(null);
    const[error,setError] = useState<string | null>(null)
    const[loading,setLoading] = useState<boolean>(false)

    useEffect(()=>{
        setError(null)
        setLoading(true)
        const abortController = new AbortController();
        const fetchData = async() => {   
            try{
                const response = await fetch(url,{signal:abortController.signal});
                if(!response.ok){ throw new Error(`HTTP ${response.status}:${response.statusText}`)}
                const responseData = await response.json();
                if(!abortController.signal.aborted){
                    setLoading(false)
                    setData(responseData)
                }
            }catch(e:any){
                if(e.name !== "AbortError"){
                    setError(e.message)                    
                }
                setLoading(false)
            }
        }
        fetchData()
        return()=>{
            abortController.abort
        }        
    },[url])
    return {error,data,loading}
}
