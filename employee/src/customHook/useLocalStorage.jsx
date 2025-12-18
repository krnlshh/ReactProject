import { useState } from "react"

const useLocalStorage = (key,value) => {
    const[data,setData] = useState(()=>{
      const getData =  localStorage.getItem(key)
      if(getData) return JSON.parse(getData)
      return value  
    })
    const setValue = (newValue) =>{
        setData(newValue)
        localStorage.setItem(key,JSON.stringify(newValue))
    }
    return [data,setValue]
}

export default useLocalStorage