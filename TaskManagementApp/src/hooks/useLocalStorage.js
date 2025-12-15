import { useState } from "react"

const useLocalStorage = (key,value) => {
    const [localData,setLocalData] = useState(()=>{
        const saveing = localStorage.getItem(key)
        if(saveing) return JSON.parse(saveing) 
        return value
    })

    const setValue = (newValue) => {
        setLocalData(newValue);
        localStorage.setItem(key,JSON.stringify(newValue))
    }
    return [localData,setValue]

}
export default useLocalStorage