import { useState } from "react"

const useLocalstorage = (key,value) => {

    const [localData,setLocalData] = useState(()=>{
        const getData = localStorage.getItem(key)
        if(getData) return JSON.parse(getData)
        return value
    })

    const setValue = (newValue) =>{
        setLocalData(newValue)
        localStorage.setItem(key,JSON.stringify(newValue))
    }

    return [localData,setValue]

}
export default useLocalstorage